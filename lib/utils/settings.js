/**
 * @fileoverview Utils about rule settings
 * @author Duke Luo
 */
'use strict';

const isGlob = require('is-glob');
const NAMING_CONVENTION = require('../constants/naming-convention');

/**
 * @type {string} invalid key or value
 * @param settings rule settings configurated by user
 * @param keyValidator settings key validator
 * @param valueValidator settings value validator
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
 * @type {boolean}
 * @param namingPattern pattern string
 */
const namingPatternValidator = (namingPattern) => {
  const buildInPatterns = Object.keys(NAMING_CONVENTION);

  return isGlob(namingPattern) || buildInPatterns.includes(namingPattern);
};

/**
 * @type {boolean}
 * @param pattern pattern string
 */
const globPatternValidator = isGlob;

module.exports = {
  checkSettings,
  namingPatternValidator,
  globPatternValidator,
};
