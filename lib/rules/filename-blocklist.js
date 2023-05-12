/**
 * @file The filename should be blocklisted.
 * @author Florian Ehmke, Duke Luo
 */
'use strict';

const { getFilename, getFilePath } = require('../utils/filename');
const {
  validateNamingPatternObject,
  globPatternValidator,
} = require('../utils/settings');
const { getDocUrl } = require('../utils/doc');
const { FILENAME_BLOCKLIST_ERROR_MESSAGE } = require('../constants/message');
const { matchRule } = require('../utils/rule');

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
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
    ],
  },

  create(context) {
    return {
      Program: (node) => {
        const rules = context.options[0];
        const message = validateNamingPatternObject(
          rules,
          globPatternValidator,
          globPatternValidator
        );

        if (message) {
          context.report({
            node,
            message,
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
            // legacy support for versions <= 2.0.0
            // file only can be specified by its filename, not by file path pattern
            // it's a legacy feature, will be removed in the future
            matchRule(filename, blockListPattern);

          if (matchResult) {
            context.report({
              node,
              message: FILENAME_BLOCKLIST_ERROR_MESSAGE(
                filename,
                blockListPattern,
                useInsteadPattern
              ),
            });
            return;
          }
        }
      },
    };
  },
};
