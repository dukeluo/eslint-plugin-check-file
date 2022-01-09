/**
 * @fileoverview A file cannot be named "index"
 * @author Duke Luo
 */
'use strict';

const { getDocUrl } = require('../utils/doc');
const { getFilename, getBasename } = require('../utils/filename');

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
    schema: [],
  },

  create(context) {
    return {
      Program: (node) => {
        const filenameWithPath = context.getFilename();
        const filename = getFilename(filenameWithPath);
        const basename = getBasename(filename);

        if (basename === 'index') {
          context.report({
            node,
            message:
              'The filename "index" is not allowed, please use another one',
          });
          return;
        }
      },
    };
  },
};
