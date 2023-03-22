/**
 * @file The filename should be blocklisted.
 * @author Florian Ehmke
 */
'use strict';

const { getFilename, getFilePath } = require('../utils/filename');
const { checkSettings, globPatternValidator } = require('../utils/settings');
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
      description: 'The filename should be blocklisted',
      category: 'Layout & Formatting',
      recommended: false,
      url: getDocUrl('filename-blocklist'),
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

        for (const [blockListPattern, useInsteadPattern] of Object.entries(
          rules
        )) {
          const matchResult =
            matchRule(filenameWithPath, blockListPattern) ||
            matchRule(filename, blockListPattern);

          if (matchResult) {
            context.report({
              node,
              message:
                'The filename "{{ filename }}" matches the blocklisted "{{ blockListPattern }}" pattern. Use a pattern like "{{ useInsteadPattern }}" instead.',
              data: {
                filename,
                blockListPattern,
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
