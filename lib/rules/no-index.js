/**
 * @file A file cannot be named "index"
 * @author Huan Luo
 */

import { NO_INDEX_ERROR_MESSAGE } from '../constants/message.js';
import { getDocUrl } from '../utils/doc.js';
import { getBasename, getFilePath, getFilename } from '../utils/filename.js';
import { isNotEmpty } from '../utils/utility.js';

/**
 * @type {import('eslint').Rule.RuleModule}
 */
export default {
  meta: {
    type: 'layout',
    docs: {
      description: 'A file cannot be named "index"',
      category: 'Layout & Formatting',
      recommended: false,
      url: getDocUrl('no-index'),
    },
    fixable: null,
    schema: [
      {
        type: 'object',
        properties: {
          ignoreMiddleExtensions: { type: 'boolean' },
          errorMessage: { type: 'string' },
        },
      },
    ],
    messages: {
      noIndex: NO_INDEX_ERROR_MESSAGE,
    },
  },

  create(context) {
    return {
      Program: (node) => {
        const ignoreMiddleExtensions =
          context.options[0]?.ignoreMiddleExtensions ?? false;
        const errorMessage = context.options[0]?.errorMessage ?? '';
        const filenameWithPath = getFilePath(context);
        const filename = getFilename(filenameWithPath);
        const basename = getBasename(filename, ignoreMiddleExtensions);

        if (basename === 'index') {
          isNotEmpty(errorMessage)
            ? context.report({
                node,
                // eslint-disable-next-line eslint-plugin/prefer-message-ids
                message: errorMessage,
                data: {
                  target: filename,
                },
              })
            : context.report({
                node,
                messageId: 'noIndex',
              });
          return;
        }
      },
    };
  },
};
