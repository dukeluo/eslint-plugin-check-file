/**
 * @file Utils about validation
 * @author Duke Luo
 */
'use strict';

const isGlob = require('is-glob');
const NAMING_CONVENTION = require('../constants/naming-convention');
const { PREFINED_MATCH_SYNTAX_REGEXP } = require('../constants/regex');
const { isObject } = require('./utility');
const {
  NAMING_PATTERN_OBJECT_ERROR_MESSAGE,
  PATTERN_ERROR_MESSAGE,
} = require('../constants/message');

/**
 * Validator
 *
 * @callback validator
 * @param {string} p pattern string
 */
/**
 * @returns {string | undefined} undefined or error message
 * @param {any} config naming pattern object configured by user
 * @param {validator} keyValidator settings key validator
 * @param {validator} valueValidator settings value validator
 */
const validateNamingPatternObject = (config, keyValidator, valueValidator) => {
  if (!isObject(config)) {
    return NAMING_PATTERN_OBJECT_ERROR_MESSAGE(config);
  }
  for (const [key, value] of Object.entries(config)) {
    if (!keyValidator(key)) {
      return PATTERN_ERROR_MESSAGE(key);
    } else if (!valueValidator(value)) {
      return PATTERN_ERROR_MESSAGE(value);
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
