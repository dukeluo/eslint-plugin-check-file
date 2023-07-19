/**
 * @file Regex pattern constants
 * @author Huan Luo
 */

/**
 * @example <1>
 */
export const PREFINED_MATCH_SYNTAX_REGEXP = /^<(\d+)>$/;

/**
 * @example C:\
 */
export const WINDOWS_DRIVE_LETTER_REGEXP = /^[A-Za-z]:\\/;

/**
 * @example $0
 */
export const TEMPLATE_VARIABLE_REGEXP = /\$(\d*)/;
