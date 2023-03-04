/**
 * @file The filename should follow the filename naming convention
 * @author Duke Luo
 */
'use strict';

const { getFilename, getBasename, getFilePath } = require('../utils/filename');
const {
  checkSettings,
  namingPatternValidator,
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
        const rules = context.options[0];
        const { ignoreMiddleExtensions } = context.options[1] || {};

        const invalidPattern = checkSettings(
          rules,
          globPatternValidator,
          namingPatternValidator
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

        const filenameWithPath = getFilePath(context);
        const filename = getFilename(filenameWithPath);

        for (const [fexPattern, namingPattern] of Object.entries(rules)) {
          const matchResult = matchRule(
            filenameWithPath,
            fexPattern,
            getBasename(filename, ignoreMiddleExtensions),
            namingPattern
          );

          if (matchResult) {
            const { path, pattern } = matchResult;
            context.report({
              node,
              message:
                'The filename "{{path}}" does not match the "{{pattern}}" style',
              data: {
                path,
                pattern,
              },
            });
            return;
          }
        }
      },
    };
  },
};
