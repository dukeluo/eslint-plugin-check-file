/**
 * @file The folder should follow the folder naming convention
 * @author Huan Luo
 */
'use strict';

const micromatch = require('micromatch');
const {
  getFolderPath,
  getSubPaths,
  getAllFolders,
  getFilePath,
} = require('../utils/filename');
const {
  validateNamingPatternObject,
  globPatternValidator,
  folderNamingPatternValidator,
} = require('../utils/validation');
const { getDocUrl } = require('../utils/doc');
const { isNotEmpty, isNil } = require('../utils/utility');
const BASIC_NAMING_CONVENTION = require('../constants/naming-convention');
const NEXT_JS_NAMING_CONVENTION = require('../constants/next-js-naming-convention');
const {
  FOLDER_NAMING_CONVENTION_ERROR_MESSAGE,
} = require('../constants/message');

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
        const message = validateNamingPatternObject(
          rules,
          globPatternValidator,
          folderNamingPatternValidator
        );

        if (message) {
          context.report({
            node,
            message,
          });
          return;
        }

        const filenameWithPath = getFilePath(context);
        const folderPath = getFolderPath(filenameWithPath);

        for (const [folderPattern, namingPattern] of Object.entries(rules)) {
          if (
            !micromatch.isMatch(folderPath, folderPattern, { contains: true })
          ) {
            continue;
          }
          for (const path of getSubPaths(folderPath)) {
            const matchedPaths = micromatch.capture(folderPattern, path, {
              dot: true,
            });

            if (isNil(matchedPaths)) continue;

            const folders = matchedPaths
              .filter(isNotEmpty)
              .reduce((s, p) => s.concat(getAllFolders(p)), []);

            for (const folder of folders) {
              if (
                !micromatch.isMatch(
                  folder,
                  BASIC_NAMING_CONVENTION[namingPattern] ||
                    NEXT_JS_NAMING_CONVENTION[namingPattern] ||
                    namingPattern
                )
              ) {
                context.report({
                  node,
                  message: FOLDER_NAMING_CONVENTION_ERROR_MESSAGE(
                    folder,
                    namingPattern
                  ),
                });
                return;
              }
            }
          }
        }
      },
    };
  },
};
