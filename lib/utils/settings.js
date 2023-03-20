/**
 * @file Utils about rule settings
 * @author Duke Luo
 */
'use strict';

const isGlob = require('is-glob');
const NAMING_CONVENTION = require('../constants/naming-convention');

/**
 * Validator
 *
 * @callback validator
 * @param {string} p pattern string
 */
/**
 * @returns {string | undefined} undefined or invalid field
 * @param {object} settings rule settings configurated by user
 * @param {validator} keyValidator settings key validator
 * @param {validator} valueValidator settings value validator
 */
const checkSettings = (settings, keyValidator, valueValidator) => {
  for (const [key, value] of Object.entries(settings)) {
    if (!keyValidator(key)) {
      return key;
    } else if (!valueValidator(value)) {
      return value;
    }
  }
};

/**
 * @returns {boolean} true if pattern is a valid naming pattern
 * @param {string} namingPattern pattern string
 */
const namingPatternValidator = (namingPattern) => {
  const buildInPatterns = Object.keys(NAMING_CONVENTION);

  return isGlob(namingPattern) || buildInPatterns.includes(namingPattern);
};

/**
 * @returns {boolean} true if pattern is a valid naming pattern
 * @param {string} namingPattern pattern string
 */
const fileNamingPatternValidator = (namingPattern) => {
  return (
    namingPatternValidator(namingPattern) || !!/^<\d+>$/.test(namingPattern)
  );
};

/**
 * @returns {boolean} true if pattern is a valid glob pattern
 * @param {string} pattern pattern string
 */
const globPatternValidator = isGlob;

module.exports = {
  checkSettings,
  namingPatternValidator,
  fileNamingPatternValidator,
  globPatternValidator,
};
