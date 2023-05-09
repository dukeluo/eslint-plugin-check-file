/**
 * @file Utils about rule settings
 * @author Duke Luo
 */
'use strict';

const isGlob = require('is-glob');
const NAMING_CONVENTION = require('../constants/naming-convention');
const { PREFINED_MATCH_SYNTAX_REGEXP } = require('../constants/regex');
const { isObject } = require('./utility');

/**
 * Validator
 *
 * @callback validator
 * @param {string} p pattern string
 */
/**
 * @returns {string | undefined} undefined or error message
 * @param {any} config naming pattern object configurated by user
 * @param {validator} keyValidator settings key validator
 * @param {validator} valueValidator settings value validator
 */
const validateNamingPatternObject = (config, keyValidator, valueValidator) => {
  if (!isObject(config)) {
    return `The naming pattern object "${config}" doesn't appear to be an Object type, please double-check it and try again`;
  }
  for (const [key, value] of Object.entries(config)) {
    if (!keyValidator(key)) {
      return `There is an invalid pattern "${key}", please check it`;
    } else if (!valueValidator(value)) {
      return `There is an invalid pattern "${value}", please check it`;
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
 * @returns {boolean} true if pattern is a valid filename naming pattern
 * @param {string} namingPattern pattern string
 */
const filenameNamingPatternValidator = (namingPattern) => {
  return (
    namingPatternValidator(namingPattern) ||
    PREFINED_MATCH_SYNTAX_REGEXP.test(namingPattern)
  );
};

/**
 * @returns {boolean} true if pattern is a valid glob pattern
 * @param {string} pattern pattern string
 */
const globPatternValidator = isGlob;

module.exports = {
  validateNamingPatternObject,
  namingPatternValidator,
  filenameNamingPatternValidator,
  globPatternValidator,
};
