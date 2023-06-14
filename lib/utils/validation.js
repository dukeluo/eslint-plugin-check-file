/**
 * @file Utils about validation
 * @author Huan Luo
 */
'use strict';

const isGlob = require('is-glob');
const BASIC_NAMING_CONVENTION = require('../constants/naming-convention');
const NEXT_JS_NAMING_CONVENTION = require('../constants/next-js-naming-convention');
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
const basicNamingPatternValidator = (namingPattern) =>
  Object.keys(BASIC_NAMING_CONVENTION).includes(namingPattern);

/**
 * @returns {boolean} true if pattern is a valid naming pattern
 * @param {string} namingPattern pattern string
 */
const nextJsNamingPatternValidator = (namingPattern) =>
  Object.keys(NEXT_JS_NAMING_CONVENTION).includes(namingPattern);

/**
 * @returns {boolean} true if pattern is a valid glob pattern
 * @param {string} pattern pattern string
 */
const globPatternValidator = isGlob;

/**
 * @returns {boolean} true if pattern is a valid filename naming pattern
 * @param {string} namingPattern pattern string
 */
const filenameNamingPatternValidator = (namingPattern) =>
  globPatternValidator(namingPattern) ||
  basicNamingPatternValidator(namingPattern) ||
  PREFINED_MATCH_SYNTAX_REGEXP.test(namingPattern);

/**
 * @returns {boolean} true if pattern is a valid filename naming pattern
 * @param {string} namingPattern pattern string
 */
const folderNamingPatternValidator = (namingPattern) =>
  globPatternValidator(namingPattern) ||
  basicNamingPatternValidator(namingPattern) ||
  nextJsNamingPatternValidator(namingPattern);

module.exports = {
  validateNamingPatternObject,
  globPatternValidator,
  filenameNamingPatternValidator,
  folderNamingPatternValidator,
};
