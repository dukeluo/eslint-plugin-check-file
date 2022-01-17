/**
 * @fileoverview The folder should follow the folder naming convention
 * @author Duke Luo
 */
'use strict';

const { getDocUrl } = require('../utils/doc');

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'The folder should follow the folder naming convention',
      category: 'Layout & Formatting',
      recommended: false,
      url: getDocUrl('folder-naming-convention'),
    },
    fixable: null,
    schema: [],
  },

  create() {
    return {};
  },
};
