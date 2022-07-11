/**
 * @fileoverview The folder should follow the folder naming convention
 * @author Duke Luo
 */
'use strict';

const micromatch = require('micromatch');
const {
  getFolderPath,
  getSubPaths,
  getAllFolders,
  toPosixPath,
} = require('../utils/filename');
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

        const filenameWithPath = toPosixPath(context.getPhysicalFilename());
        const folderPath = getFolderPath(filenameWithPath);
        const subPaths = getSubPaths(folderPath);

        for (const path of subPaths) {
          for (const [folderPattern, namingPattern] of Object.entries(rules)) {
            if (!micromatch.isMatch(path, folderPattern)) {
              continue;
            } else {
              const matchedPath = micromatch.capture(folderPattern, path)[0]; // only the first matched value is valid
              const folders = getAllFolders(matchedPath);

              for (const folder of folders) {
                if (
                  !micromatch.isMatch(
                    folder,
                    NAMING_CONVENTION[namingPattern] || namingPattern
                  )
                ) {
                  context.report({
                    node,
                    message:
                      'The folder "{{folder}}" does not match the "{{namingPattern}}" style',
                    data: {
                      folder,
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
