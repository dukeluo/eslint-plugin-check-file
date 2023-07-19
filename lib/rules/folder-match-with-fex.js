/**
 * @file The folder should match the naming pattern specified by its file
 * @author Huan Luo
 */

import { FOLDER_MATCH_WITH_FEX_ERROR_MESSAGE } from '../constants/message.js';
import { getDocUrl } from '../utils/doc.js';
import { getFilePath, getFilename, getFolderPath } from '../utils/filename.js';
import { matchRule } from '../utils/rule.js';
import {
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
      description:
        'The folder should match the naming pattern specified by its file',
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
