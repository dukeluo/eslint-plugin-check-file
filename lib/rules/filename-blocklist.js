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
import { isNotEmpty } from '../utils/utility.js';
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
    return {
      Program: (node) => {
        const rules = context.options[0];
        const errorMessage = context.options[1]?.errorMessage ?? '';
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

        for (const [blockListPattern, useInsteadPattern] of Object.entries(
          rules
        )) {
          const matchResult =
            matchRule(filenameWithPath, blockListPattern) ||
            // TODO: remove this in next major version
            // legacy support for versions <= 2.0.0
            // file only can be specified by its filename, not by file path pattern
            // it's a legacy feature, will be removed in the future
            matchRule(filename, blockListPattern);

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
      },
    };
  },
};
