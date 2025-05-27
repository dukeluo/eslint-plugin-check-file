/**
 * @file The folder should follow the folder naming convention
 * @author Huan Luo
 */

import micromatch from 'micromatch';
import {
  FOLDER_NAMING_CONVENTION_ERROR_MESSAGE,
  NAMING_PATTERN_OBJECT_ERROR_MESSAGE,
  PATTERN_ERROR_MESSAGE,
} from '../constants/message.js';
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
      {
        type: 'object',
        properties: {
          errorMessage: { type: 'string' },
          ignoreWords: {
            type: 'array',
            items: { type: 'string' },
          },
        },
      },
    ],
    messages: {
      invalidObject: NAMING_PATTERN_OBJECT_ERROR_MESSAGE,
      invalidPattern: PATTERN_ERROR_MESSAGE,
      noMatch: FOLDER_NAMING_CONVENTION_ERROR_MESSAGE,
    },
  },

  create(context) {
    const rule = (node) => {
      const rules = context.options[0];
      const error = validateNamingPatternObject(
        rules,
        globPatternValidator,
        folderNamingPatternValidator
      );

      if (error) {
        context.report({
          node,
          messageId: error.type,
          data: {
            value: error.payload,
          },
        });
        return;
      }

      const filenameWithPath = getFilePath(context);
      const folderPath = getFolderPath(filenameWithPath);
      const errorMessage = context.options[1]?.errorMessage ?? '';
      const ignoreWords = context.options[1]?.ignoreWords ?? [];

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
            // Skip validation if the folder name is in the ignore list
            if (ignoreWords.includes(folder)) {
              continue;
            }

            if (
              !micromatch.isMatch(
                folder,
                BASIC_NAMING_CONVENTION[namingPattern] ||
                  NEXT_JS_NAMING_CONVENTION[namingPattern] ||
                  namingPattern
              )
            ) {
              isNotEmpty(errorMessage)
                ? context.report({
                    node,
                    // eslint-disable-next-line eslint-plugin/prefer-message-ids
                    message: errorMessage,
                    data: {
                      target: folder,
                      pattern: namingPattern,
                    },
                  })
                : context.report({
                    node,
                    messageId: 'noMatch',
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
    };

    return {
      Document: rule,
      Program: rule,
      root: rule,
      StyleSheet: rule,
    };
  },
};
