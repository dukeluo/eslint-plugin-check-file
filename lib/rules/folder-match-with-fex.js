/**
 * @file The folder should match the naming pattern specified by the file extension
 * @author Duke Luo
 */
'use strict';

const {
  getFolderPath,
  getFilename,
  getFilePath,
} = require('../utils/filename');
const {
  validateNamingPatternObject,
  globPatternValidator,
} = require('../utils/settings');
const { getDocUrl } = require('../utils/doc');
const { FOLDER_MATCH_WITH_FEX_ERROR_MESSAGE } = require('../constants/message');
const { matchRule } = require('../utils/rule');

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description:
        'The folder should match the naming pattern specified by the file extension',
      category: 'Layout & Formatting',
      recommended: false,
      url: getDocUrl('folder-match-with-fex'),
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
        const message = validateNamingPatternObject(
          rules,
          globPatternValidator,
          globPatternValidator
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
        const folderPath = getFolderPath(filenameWithPath);

        for (const [fexPattern, folderPattern] of Object.entries(rules)) {
          const matchResult = matchRule(
            filename,
            fexPattern,
            folderPath,
            folderPattern
          );

          if (matchResult) {
            context.report({
              node,
              message: FOLDER_MATCH_WITH_FEX_ERROR_MESSAGE(
                filenameWithPath,
                folderPattern
              ),
            });
            return;
          }
        }
      },
    };
  },
};
