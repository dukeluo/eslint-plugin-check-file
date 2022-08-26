/**
 * @fileoverview A file cannot be named "index"
 * @author Duke Luo
 */
'use strict';

const { getDocUrl } = require('../utils/doc');
const { getFilename, getFilePath } = require('../utils/filename');

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
        const filenameWithPath = getFilePath(context);
        const filename = getFilename(filenameWithPath);

        if (filename === 'index.tsx') {
          context.report({
            node,
            message:
              'The filename "index.tsx" is not allowed, please use another one',
          }); 
          return;
        }

        if (filename === 'index.stories.tsx') {
          context.report({
            node,
            message:
              'The filename "index.stories.tsx" is not allowed, please use another one',
          }); 
          return;
        }

        if (filename.includes('test.tsx')) {
          context.report({
            node,
            message:
              'The filename "*.test.tsx" is not allowed, please use "*.spec.tsx".',
          }); 
          return;
        }
      },
    };
  },
};
