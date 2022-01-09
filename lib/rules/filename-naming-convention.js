/**
 * @fileoverview The filename should follow the filename naming convention
 * @author Duke Luo
 */
'use strict';

const micromatch = require('micromatch');
const { getFilename, getBasename } = require('../utils/filename');
const {
  checkSettings,
  namingPatternValidator,
  globPatternValidator,
} = require('../utils/settings');
const { getDocUrl } = require('../utils/doc');
const NAMING_CONVENTION = require('../constants/naming-convention');

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
    ],
  },

  create(context) {
    return {
      Program: (node) => {
        const rules = context.options[0];
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

        const filenameWithPath = context.getFilename();
        const filename = getFilename(filenameWithPath);

        for (const [fexPattern, namingPattern] of Object.entries(rules)) {
          if (!micromatch.isMatch(filename, fexPattern)) {
            continue;
          } else if (
            micromatch.isMatch(
              getBasename(filename),
              NAMING_CONVENTION[namingPattern] || namingPattern
            )
          ) {
            return;
          } else {
            context.report({
              node,
              message:
                'The filename "{{filename}}" does not match the "{{namingPattern}}" style',
              data: {
                filename,
                namingPattern,
              },
            });
            return;
          }
        }
      },
    };
  },
};
