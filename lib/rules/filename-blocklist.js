/**
 * @file The filename should be blocklisted.
 * @author Florian Ehmke, Huan Luo
 */

import {
  FILENAME_BLOCKLIST_ERROR_MESSAGE,
  NAMING_PATTERN_OBJECT_ERROR_MESSAGE,
  PATTERN_ERROR_MESSAGE,
} from '../constants/message.js';
import { getDocUrl } from '../utils/doc.js';
import { getFilePath, getFilename } from '../utils/filename.js';
import { matchRule } from '../utils/rule.js';
import { isEmpty, isNotEmpty } from '../utils/utility.js';
import {
  validateNamingPatternObject,
  globPatternValidator,
} from '../utils/validation.js';

/**
 * @type {import('eslint').Rule.RuleModule}
 */
export default {
  meta: {
    type: 'layout',
    docs: {
      description: 'The filename should be blocklisted',
      category: 'Layout & Formatting',
      recommended: false,
      url: getDocUrl('filename-blocklist'),
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
      noMatch: FILENAME_BLOCKLIST_ERROR_MESSAGE,
    },
  },

  create(context) {
    const rule = (node) => {
      const rules = context.options[0];
      const errorMessage = context.options[1]?.errorMessage ?? '';
      const error = validateNamingPatternObject(
        rules,
        globPatternValidator,
        isEmpty(errorMessage) ? globPatternValidator : () => true
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

      for (const [blockListPattern, useInsteadPattern] of Object.entries(
        rules
      )) {
        const matchResult = matchRule(filenameWithPath, blockListPattern);

        if (matchResult) {
          isNotEmpty(errorMessage)
            ? context.report({
                node,
                // eslint-disable-next-line eslint-plugin/prefer-message-ids
                message: errorMessage,
                data: {
                  target: filename,
                  pattern: blockListPattern,
                },
              })
            : context.report({
                node,
                messageId: 'noMatch',
                data: {
                  filename,
                  blockListPattern,
                  suggestion: useInsteadPattern,
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
