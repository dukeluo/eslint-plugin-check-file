/**
 * @file A file cannot be named "index"
 * @author Huan Luo
 */

import { NO_INDEX_ERROR_MESSAGE } from '../constants/message.js';
import { getDocUrl } from '../utils/doc.js';
import { getBasename, getFilePath, getFilename } from '../utils/filename.js';

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
        },
      },
    ],
  },

  create(context) {
    return {
      Program: (node) => {
        const { ignoreMiddleExtensions } = context.options[0] || {};
        const filenameWithPath = getFilePath(context);
        const filename = getFilename(filenameWithPath);
        const basename = getBasename(filename, ignoreMiddleExtensions);

        if (basename === 'index') {
          context.report({
            node,
            message: NO_INDEX_ERROR_MESSAGE,
          });
          return;
        }
      },
    };
  },
};
