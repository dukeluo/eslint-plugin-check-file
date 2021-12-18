/**
 * @fileoverview The folder should match the rules specified by the file extension
 * @author Duke Luo
 */
'use strict';

const micromatch = require('micromatch');
const { getFolder, getFilename } = require('../utils/filename');

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description:
        'The folder should match the rules specified by the file extension',
      category: 'Layout & Formatting',
      recommended: false,
      url: null, //TODO URL to the documentation page for this rule
    },
    fixable: null,
    schema: [
      {
        enum: ['always', 'never'],
      },
      {
        patternProperties: {
          '^.*$': { type: 'string' },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    return {
      Program: (node) => {
        const filenameWithPath = context.getFilename();
        const filename = getFilename(filenameWithPath);
        const folder = getFolder(filenameWithPath);
        const rules = context.options[1];

        for (const [fexPattern, folderPattern] of Object.entries(rules)) {
          if (!micromatch.isMatch(filename, fexPattern)) {
            continue;
          } else if (micromatch.isMatch(folder, folderPattern)) {
            continue;
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
          }
        }
      },
    };
  },
};
