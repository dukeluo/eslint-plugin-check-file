/**
 * @file A file cannot be named "index"
 * @author Huan Luo
 */

import micromatch from 'micromatch';
import {
  NO_INDEX_ERROR_MESSAGE,
  PATTERN_ERROR_MESSAGE,
} from '../constants/message.js';
import { getDocUrl } from '../utils/doc.js';
import {
  getBasename,
  getFilePath,
  getFilename,
  getFolderPath,
} from '../utils/filename.js';
import { isEmpty, isNil } from '../utils/utility.js';
import { globPatternValidator } from '../utils/validation.js';

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
          folderPaths: { type: 'array' },
          ignoreMiddleExtensions: { type: 'boolean' },
        },
      },
    ],
    messages: {
      noIndex: NO_INDEX_ERROR_MESSAGE,
      invalidPattern: PATTERN_ERROR_MESSAGE,
    },
  },

  create(context) {
    return {
      Program: (node) => {
        const rules = context.options[0] || {};
        const folderPaths = rules.folderPaths;
        const filenameWithPath = getFilePath(context);
        const folderPath = getFolderPath(filenameWithPath);
        const filename = getFilename(filenameWithPath);
        const basename = getBasename(filename, rules.ignoreMiddleExtensions);

        if (isNil(folderPaths) || isEmpty(folderPaths)) {
          if (basename === 'index') {
            context.report({
              node,
              messageId: 'noIndex',
            });
          }
          return;
        }

        for (const folderPattern of folderPaths) {
          if (!globPatternValidator(folderPattern)) {
            context.report({
              node,
              messageId: 'invalidPattern',
              data: {
                value: folderPattern,
              },
            });
            continue;
          }

          if (
            micromatch.isMatch(folderPath, folderPattern, { contains: true }) &&
            basename === 'index'
          ) {
            context.report({
              node,
              messageId: 'noIndex',
            });
            continue;
          }
        }
      },
    };
  },
};
