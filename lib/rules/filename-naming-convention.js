/**
 * @file The filename should follow the filename naming convention
 * @author Duke Luo
 */
'use strict';

const {
  transformRuleWithPrefinedMatchSyntax,
  matchRule,
} = require('../utils/rule');
const { getFilename, getBasename, getFilePath } = require('../utils/filename');
const {
  validateNamingPatternObject,
  filenameNamingPatternValidator,
  globPatternValidator,
} = require('../utils/validation');
const { getDocUrl } = require('../utils/doc');
const {
  FILENAME_NAMING_CONVENTION_ERROR_MESSAGE,
} = require('../constants/message');

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
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
