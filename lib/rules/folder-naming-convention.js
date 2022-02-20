/**
 * @fileoverview The folder should follow the folder naming convention
 * @author Duke Luo
 */
'use strict';

const micromatch = require('micromatch');
const { getFolder, getSubPaths } = require('../utils/filename');
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
      description: 'The folder should follow the folder naming convention',
      category: 'Layout & Formatting',
      recommended: false,
      url: getDocUrl('folder-naming-convention'),
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
        const folder = getFolder(filenameWithPath);
        const subPaths = getSubPaths(folder);

        for (const path of subPaths) {
          for (const [folderPattern, namingPattern] of Object.entries(rules)) {
            if (!micromatch.isMatch(path, folderPattern)) {
              continue;
            } else {
              const matchedValue = micromatch.capture(folderPattern, path);

              for (const value of matchedValue) {
                if (
                  !micromatch.isMatch(
                    value,
                    NAMING_CONVENTION[namingPattern] || namingPattern
                  )
                ) {
                  context.report({
                    node,
                    message:
                      'The folder "{{value}}" does not match the "{{namingPattern}}" style',
                    data: {
                      value,
                      namingPattern,
                    },
                  });
                  return;
                }
              }
            }
          }
        }
      },
    };
  },
};
