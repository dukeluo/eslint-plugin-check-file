/**
 * @fileoverview The filename should not be blacklisted.
 * @author Florian Ehmke
 */
'use strict';

const { getFilename, getFilePath } = require('../utils/filename');
const { checkSettings, globPatternValidator } = require('../utils/settings');
const { getDocUrl } = require('../utils/doc');
const { matchRule } = require('../utils/match');

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'The filename should not be blacklisted',
      category: 'Layout & Formatting',
      recommended: false,
      url: getDocUrl('filename-blacklist'),
    },
    fixable: null,
    schema: [
      {
        additionalProperties: {
          type: 'string',
        },
      },
    ],
  },

  create(context) {
    return {
      Program: (node) => {
        const rules = context.options[0];

        const invalidPattern = checkSettings(
          rules,
          globPatternValidator,
          globPatternValidator
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

        for (const [blackListPattern, useInsteadPattern] of Object.entries(
          rules
        )) {
          const matchResult = matchRule(filename, blackListPattern);

          if (matchResult) {
            const { path } = matchResult;
            let message =
              'The filename "{{ path }}" matches the blacklisted "{{ blackListPattern }}" pattern. Use a pattern like "{{ useInsteadPattern }}" instead.';

            context.report({
              node,
              message,
              data: {
                path,
                blackListPattern,
                useInsteadPattern,
              },
            });
            return;
          }
        }
      },
    };
  },
};
