/**
 * @file Utils about matching rule
 * @author Duke Luo
 */
'use strict';

const micromatch = require('micromatch');
const NAMING_CONVENTION = require('../constants/naming-convention');

/**
 * @returns {object | undefined} undefined or object with non-matching file path and naming pattern
 * @param {string} filePath file path
 * @param {string} targetFilePathPattern path pattern of the target file
 * @param {string} [targetNaming] target naming
 * @param {string} [targetNamingPattern] naming pattern of the target naming
 */
const matchRule = (
  filePath,
  targetFilePathPattern,
  targetNaming,
  targetNamingPattern
) => {
  if (!micromatch.isMatch(filePath, targetFilePathPattern)) {
    return;
  } else if (
    targetNaming &&
    targetNamingPattern &&
    micromatch.isMatch(
      targetNaming,
      NAMING_CONVENTION[targetNamingPattern] || targetNamingPattern
    )
  ) {
    return;
  } else {
    return {
      path: filePath,
      pattern: targetNamingPattern,
    };
  }
};

module.exports = {
  matchRule,
};
