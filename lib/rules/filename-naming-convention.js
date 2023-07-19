/**
 * @file The filename should follow the filename naming convention
 * @author Huan Luo
 */

import { FILENAME_NAMING_CONVENTION_ERROR_MESSAGE } from '../constants/message.js';
import { getDocUrl } from '../utils/doc.js';
import { getBasename, getFilePath, getFilename } from '../utils/filename.js';
import {
  matchRule,
  transformRuleWithPrefinedMatchSyntax,
} from '../utils/rule.js';
import {
  filenameNamingPatternValidator,
  globPatternValidator,
  validateNamingPatternObject,
} from '../utils/validation.js';

/**
 * @type {import('eslint').Rule.RuleModule}
 */
export default {
  meta: {
    type: 'layout',
    docs: {
      description: 'The filename should follow the filename naming convention',
      category: 'Layout & Formatting',
      recommended: false,
      url: getDocUrl('filename-naming-convention'),
    },
    fixable: null,
    schema: [
      {
        additionalProperties: {
          type: 'string',
        },
      },
      {
        type: 'object',
        properties: {
          ignoreMiddleExtensions: { type: 'boolean' },
        },
      },
    ],
  },

  create(context) {
    return {
      Program: (node) => {
        const rules = context.options[0];
        const message = validateNamingPatternObject(
          rules,
          globPatternValidator,
          filenameNamingPatternValidator
        );

        if (message) {
          context.report({
            node,
            message,
          });
          return;
        }

        const filenameWithPath = getFilePath(context);
        const filename = getFilename(filenameWithPath);
        const { ignoreMiddleExtensions } = context.options[1] || {};

        for (const [
          originalFilenamePattern,
          originalNamingPattern,
        ] of Object.entries(rules)) {
          try {
            const [filenamePattern, namingPattern] =
              transformRuleWithPrefinedMatchSyntax(
                [originalFilenamePattern, originalNamingPattern],
                filenameWithPath
              );

            const matchResult = matchRule(
              filenameWithPath,
              filenamePattern,
              getBasename(filename, ignoreMiddleExtensions),
              namingPattern
            );

            if (matchResult) {
              throw new Error(
                FILENAME_NAMING_CONVENTION_ERROR_MESSAGE(
                  filename,
                  originalNamingPattern
                )
              );
            }
          } catch (error) {
            context.report({
              node,
              message: error.message,
            });
          }
        }
      },
    };
  },
};
