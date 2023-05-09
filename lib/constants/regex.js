/**
 * @file Regex pattern constants
 * @author Duke Luo
 */
'use strict';

/**
 * @example <1>
 */
const PREFINED_MATCH_SYNTAX_REGEXP = /^<(\d+)>$/;

/**
 * @example C:\
 */
const WINDOWS_DRIVE_LETTER_REGEXP = /^[A-Za-z]:\\/;

module.exports = {
  PREFINED_MATCH_SYNTAX_REGEXP,
  WINDOWS_DRIVE_LETTER_REGEXP,
};
