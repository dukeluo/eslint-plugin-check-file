/**
 * @file The filename should follow the filename naming convention
 * @author Huan Luo
 */

import {
  FILENAME_NAMING_CONVENTION_ERROR_MESSAGE,
  NAMING_PATTERN_OBJECT_ERROR_MESSAGE,
  PATTERN_ERROR_MESSAGE,
  PREFINED_MATCH_SYNTAX_ERROR_MESSAGE,
} from '../constants/message.js';
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
    messages: {
      invalidObject: NAMING_PATTERN_OBJECT_ERROR_MESSAGE,
      invalidPattern: PATTERN_ERROR_MESSAGE,
      invalidPrefinedMatch: PREFINED_MATCH_SYNTAX_ERROR_MESSAGE,
      noMatch: FILENAME_NAMING_CONVENTION_ERROR_MESSAGE,
    },
  },

  create(context) {
    return {
      Program: (node) => {
        const rules = context.options[0];
        const error = validateNamingPatternObject(
          rules,
          globPatternValidator,
          filenameNamingPatternValidator
        );

        if (error) {
          context.report({
            node,
            messageId: error.type,
            data: {
              value: error.payload,
            },
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
              throw {
                type: 'noMatch',
                payload: {
                  filename,
                  originalNamingPattern,
                },
              };
            }
          } catch (error) {
            context.report({
              node,
              messageId: error.type,
              data: error.payload,
            });
          }
        }
      },
    };
  },
};
