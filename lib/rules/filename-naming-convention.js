/**
 * @file The filename should follow the filename naming convention
 * @author Duke Luo
 */
'use strict';

const { transformRuleWithPrefinedMatchSyntax } = require('../utils/transform');
const { getFilename, getBasename, getFilePath } = require('../utils/filename');
const {
  checkSettings,
  filenameNamingPatternValidator,
  globPatternValidator,
} = require('../utils/settings');
const { getDocUrl } = require('../utils/doc');
const { matchRule } = require('../utils/match');

/** @typedef {module:eslint} ESLint */
/**
 * @type {ESLint.Rule.RuleModule}
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
        const filenameWithPath = getFilePath(context);
        const filename = getFilename(filenameWithPath);

        const rules = context.options[0] || {};
        const { ignoreMiddleExtensions } = context.options[1] || {};

        const invalidPattern = checkSettings(
          rules,
          globPatternValidator,
          filenameNamingPatternValidator
        );

        if (invalidPattern) {
          context.report({
            node,
            message:
              'There is an invalid pattern "{{invalidPattern}}", please check it',
            data: {
              invalidPattern,
            },
          });
          return;
        }

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
                `The filename "${filename}" does not match the "${originalNamingPattern}" style`
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
