/**
 * @fileoverview The filename should follow the filename naming convention
 * @author Duke Luo
 */
'use strict';

const micromatch = require('micromatch');
const { getFilename, getBasename } = require('../utils/filename');
const NAMING_CONVENTION = require('../constants/naming-convention');

/**
 * @type {string} invalid naming pattern
 * @param {string} rules naming pattern configurated by user
 */
const checkNamingConfig = (rules) => {
  const buildInPatterns = Object.keys(NAMING_CONVENTION);
  const isValidPattern = (pattern) =>
    (typeof pattern === 'string' && buildInPatterns.includes(pattern)) ||
    pattern instanceof RegExp;

  return Object.values(rules).find((pattern) => !isValidPattern(pattern));
};

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
      url: null, // TODO: URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
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
        const invalidPatter = checkNamingConfig(rules);

        if (invalidPatter) {
          context.report({
            node,
            message:
              'There is an unsupported naming pattern "{{invalidPatter}}", please check it.',
            data: {
              invalidPatter,
            },
          });
          return;
        }

        const filenameWithPath = context.getFilename();
        const filename = getFilename(filenameWithPath);

        for (const [fexPattern, pattern] of Object.entries(rules)) {
          if (!micromatch.isMatch(filename, fexPattern)) {
            continue;
          } else if (
            (NAMING_CONVENTION[pattern] || pattern).test(getBasename(filename))
          ) {
            return;
          } else {
            context.report({
              node,
              message:
                'The filename "{{filename}}" does not match the "{{pattern}}" style',
              data: {
                filename,
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
