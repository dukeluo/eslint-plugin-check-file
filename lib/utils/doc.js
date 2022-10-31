/**
 * @file Utils about document
 * @author Duke Luo
 */
'use strict';

/**
 * @returns {string} rule document url
 * @param {string} rule rule name
 */
const getDocUrl = (rule) =>
  `https://github.com/DukeLuo/eslint-plugin-check-file/blob/main/docs/rules/${rule}.md`;

module.exports = {
  getDocUrl,
};
