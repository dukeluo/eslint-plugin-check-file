/**
 * @file The filename should be blocklisted.
 * @author Florian Ehmke, Huan Luo
 */

import {
  FILENAME_BLOCKLIST_ERROR_MESSAGE,
  FILENAME_BLOCKLIST_NON_GLOB_ERROR_MESSAGE,
  NAMING_PATTERN_OBJECT_ERROR_MESSAGE,
  PATTERN_ERROR_MESSAGE,
} from '../constants/message.js';
import { getDocUrl } from '../utils/doc.js';
import { getFilePath, getFilename } from '../utils/filename.js';
import { matchRule } from '../utils/rule.js';
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
          nonGlobSuggestion: { type: 'boolean' },
        },
      },
    ],
    messages: {
      invalidObject: NAMING_PATTERN_OBJECT_ERROR_MESSAGE,
      invalidPattern: PATTERN_ERROR_MESSAGE,
      noMatch: FILENAME_BLOCKLIST_ERROR_MESSAGE,
      noMatchWithNonGlob: FILENAME_BLOCKLIST_NON_GLOB_ERROR_MESSAGE,
    },
  },

  create(context) {
    return {
      Program: (node) => {
        const rules = context.options[0];
        const { nonGlobSuggestion } = context.options[1] || {
          nonGlobSuggestion: false,
        };
        const error = validateNamingPatternObject(
          rules,
          globPatternValidator,
          nonGlobSuggestion ? () => true : globPatternValidator
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

        for (const [
          blockListPattern,
          useInsteadPatternOrString,
        ] of Object.entries(rules)) {
          const matchResult =
            matchRule(filenameWithPath, blockListPattern) ||
            // TODO: remove this in next major version
            // legacy support for versions <= 2.0.0
            // file only can be specified by its filename, not by file path pattern
            // it's a legacy feature, will be removed in the future
            matchRule(filename, blockListPattern);

          if (matchResult) {
            context.report({
              node,
              messageId: nonGlobSuggestion ? 'noMatchWithNonGlob' : 'noMatch',
              data: {
                filename,
                blockListPattern,
                suggestion: useInsteadPatternOrString,
              },
            });
            return;
          }
        }
      },
    };
  },
};
