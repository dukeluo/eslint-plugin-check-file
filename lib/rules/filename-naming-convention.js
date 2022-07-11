/**
 * @fileoverview The filename should follow the filename naming convention
 * @author Duke Luo
 */
'use strict';

const {
  getFilename,
  getBasename,
  getPathFromRepositoryRoot,
  toPosixPath,
} = require('../utils/filename');
const {
  checkSettings,
  namingPatternValidator,
  globPatternValidator,
} = require('../utils/settings');
const { getDocUrl } = require('../utils/doc');
const { matchRule } = require('../utils/match');

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'The filename should follow the filename naming convention',
      category: 'Layout & Formatting',
      recommended: false,
      url: getDocUrl('filename-naming-convention'),
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
          ignoreMiddleExtensions: { type: 'boolean' },
        },
      },
    ],
  },

  create(context) {
    return {
      Program: (node) => {
        const rules = context.options[0];
        const { ignoreMiddleExtensions } = context.options[1] || {};

        const invalidPattern = checkSettings(
          rules,
          globPatternValidator,
          namingPatternValidator
        );

        if (invalidPattern) {
          context.report({
            node,
            message:
              'There is an invalid pattern "{{invalidPattern}}", please check it',
            data: {
              invalidPattern,
            },
          });
          return;
        }

        const pathFromRepositoryRoot = getPathFromRepositoryRoot(
          toPosixPath(context.getPhysicalFilename()),
          toPosixPath(context.getCwd())
        );
        const filename = getFilename(pathFromRepositoryRoot);

        for (const [fexPattern, namingPattern] of Object.entries(rules)) {
          const matchResult =
            matchRule(
              pathFromRepositoryRoot,
              fexPattern,
              getBasename(filename, ignoreMiddleExtensions),
              namingPattern
            ) ||
            // legacy support for version below v1.2.0
            // file only can be specified by fex pattern, not by file path pattern
            // it's a legacy feature, will be removed in the future
            matchRule(
              filename,
              fexPattern,
              getBasename(filename, ignoreMiddleExtensions),
              namingPattern
            );

          if (matchResult) {
            const { path, pattern } = matchResult;
            context.report({
              node,
              message:
                'The filename "{{path}}" does not match the "{{pattern}}" style',
              data: {
                path,
                pattern,
              },
            });
            return;
          }
        }
      },
    };
  },
};
