/**
 * @file Utils about validation
 * @author Huan Luo
 */

import isGlob from 'is-glob';
import * as BASIC_NAMING_CONVENTION from '../constants/naming-convention.js';
import * as NEXT_JS_NAMING_CONVENTION from '../constants/next-js-naming-convention.js';
import { PREFINED_MATCH_SYNTAX_REGEXP } from '../constants/regex.js';
import { isObject } from './utility.js';

/**
 * @typedef {object} ValidationError
 * @property {string} type - The type of validation error
 * @property {*} payload - An optional payload associated with the validation error
 */
/**
 * Validator
 * @callback validator
 * @param {string} p pattern string
 */
/**
 * @returns {ValidationError | undefined} undefined or validation result
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
    return { type: 'invalidObject', payload: config };
  }
  for (const [key, value] of Object.entries(config)) {
    if (!keyValidator(key)) {
      return { type: 'invalidPattern', payload: key };
    } else if (!valueValidator(value)) {
      return { type: 'invalidPattern', payload: value };
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
