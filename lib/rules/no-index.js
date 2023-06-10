/**
 * @file A file cannot be named "index"
 * @author Huan Luo
 */
'use strict';

const { getDocUrl } = require('../utils/doc');
const { getFilename, getBasename, getFilePath } = require('../utils/filename');
const { NO_INDEX_ERROR_MESSAGE } = require('../constants/message');

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
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
