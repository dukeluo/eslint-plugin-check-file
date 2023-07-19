/**
 * @file The folder should follow the folder naming convention
 * @author Huan Luo
 */

import micromatch from 'micromatch';
import { FOLDER_NAMING_CONVENTION_ERROR_MESSAGE } from '../constants/message.js';
import * as BASIC_NAMING_CONVENTION from '../constants/naming-convention.js';
import * as NEXT_JS_NAMING_CONVENTION from '../constants/next-js-naming-convention.js';
import { getDocUrl } from '../utils/doc.js';
import {
  getAllFolders,
  getFilePath,
  getFolderPath,
  getSubPaths,
} from '../utils/filename.js';
import { isNil, isNotEmpty } from '../utils/utility.js';
import {
  folderNamingPatternValidator,
  globPatternValidator,
  validateNamingPatternObject,
} from '../utils/validation.js';

/**
 * @type {import('eslint').Rule.RuleModule}
 */
export default {
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
