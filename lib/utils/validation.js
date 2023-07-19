/**
 * @file Utils about validation
 * @author Huan Luo
 */

import isGlob from 'is-glob';
import {
  NAMING_PATTERN_OBJECT_ERROR_MESSAGE,
  PATTERN_ERROR_MESSAGE,
} from '../constants/message.js';
import * as BASIC_NAMING_CONVENTION from '../constants/naming-convention.js';
import * as NEXT_JS_NAMING_CONVENTION from '../constants/next-js-naming-convention.js';
import { PREFINED_MATCH_SYNTAX_REGEXP } from '../constants/regex.js';
import { isObject } from './utility.js';

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
export const validateNamingPatternObject = (
  config,
  keyValidator,
  valueValidator
) => {
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
export const globPatternValidator = isGlob;

/**
 * @returns {boolean} true if pattern is a valid filename naming pattern
 * @param {string} namingPattern pattern string
 */
export const filenameNamingPatternValidator = (namingPattern) =>
  globPatternValidator(namingPattern) ||
  basicNamingPatternValidator(namingPattern) ||
  PREFINED_MATCH_SYNTAX_REGEXP.test(namingPattern);

/**
 * @returns {boolean} true if pattern is a valid filename naming pattern
 * @param {string} namingPattern pattern string
 */
export const folderNamingPatternValidator = (namingPattern) =>
  globPatternValidator(namingPattern) ||
  basicNamingPatternValidator(namingPattern) ||
  nextJsNamingPatternValidator(namingPattern);
