/**
 * @fileoverview The folder should match the naming pattern specified by the file extension
 * @author Duke Luo
 */
'use strict';

const micromatch = require('micromatch');
const { getFolder, getFilename } = require('../utils/filename');
const { getDocUrl } = require('../utils/doc');

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description:
        'The folder should match the naming pattern specified by the file extension',
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
    ],
  },

  create(context) {
    return {
      Program: (node) => {
        const filenameWithPath = context.getFilename();
        const filename = getFilename(filenameWithPath);
        const folder = getFolder(filenameWithPath);
        const rules = context.options[0];

        for (const [fexPattern, folderPattern] of Object.entries(rules)) {
          if (!micromatch.isMatch(filename, fexPattern)) {
            continue;
          } else if (micromatch.isMatch(folder, folderPattern)) {
            return;
          } else {
            context.report({
              node,
              message:
                'The folder of the file "{{filenameWithPath}}" does not match "{{folderPattern}}"',
              data: {
                filenameWithPath,
                folderPattern,
              },
            });
            return;
          }
        }
      },
    };
  },
};
