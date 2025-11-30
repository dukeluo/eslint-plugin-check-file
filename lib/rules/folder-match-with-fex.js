/**
 * @file The folder should match the naming pattern specified by its file
 * @author Huan Luo
 */

import {
  FOLDER_MATCH_WITH_FEX_ERROR_MESSAGE,
  NAMING_PATTERN_OBJECT_ERROR_MESSAGE,
  PATTERN_ERROR_MESSAGE,
} from '../constants/message.js';
import { getDocUrl } from '../utils/doc.js';
import { getFilePath, getFilename, getFolderPath } from '../utils/filename.js';
import { matchRule } from '../utils/rule.js';
import { isNotEmpty } from '../utils/utility.js';
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
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          errorMessage: { type: 'string' },
        },
      },
    ],
    messages: {
      invalidObject: NAMING_PATTERN_OBJECT_ERROR_MESSAGE,
      invalidPattern: PATTERN_ERROR_MESSAGE,
      noMatch: FOLDER_MATCH_WITH_FEX_ERROR_MESSAGE,
    },
  },

  create(context) {
    const rule = (node) => {
      const rules = context.options[0];
      const error = validateNamingPatternObject(
        rules,
        globPatternValidator,
        globPatternValidator
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
      const filename = getFilename(filenameWithPath);
      const folderPath = getFolderPath(filenameWithPath);
      const errorMessage = context.options[1]?.errorMessage ?? '';

      for (const [fexPattern, folderPattern] of Object.entries(rules)) {
        const matchResult = matchRule(
          filename,
          fexPattern,
          folderPath,
          folderPattern
        );

        if (matchResult) {
          isNotEmpty(errorMessage)
            ? context.report({
                node,
                // eslint-disable-next-line eslint-plugin/prefer-message-ids
                message: errorMessage,
                data: {
                  target: filename,
                  pattern: folderPattern,
                },
              })
            : context.report({
                node,
                messageId: 'noMatch',
                data: {
                  filename,
                  folderPattern,
                },
              });
          return;
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
