/**
 * @file A utility file containing useful functions
 * @author Duke Luo
 */
'use strict';

const { TEMPLATE_VARIABLE_REGEXP } = require('../constants/regex');

/**
 * Checks if the given argument is an object
 *
 * @param {any} x - The argument to check
 * @returns {boolean} - True if the argument is an object, false otherwise
 */
const isObject = (x) => Object.prototype.toString.call(x) === '[object Object]';

/**
 * Checks if the given argument is an array
 *
 * @param {any} x - The argument to check
 * @returns {boolean} - True if the argument is an array, false otherwise
 */
const isArray = (x) =>
  x != null &&
  x.length >= 0 &&
  Object.prototype.toString.call(x) === '[object Array]';

/**
 * Checks if a value is undefined or null
 *
 * @param {any} x - The value to check
 * @returns {boolean} - Returns true if the value is undefined or null, false otherwise
 */
const isNil = (x) => x === undefined || x === null;

/**
 * Checks if a value is an empty value
 *
 * @param {any} x - The value to check
 * @returns {boolean} - Returns true if the value is an empty value, false otherwise
 */
const isEmpty = (x) =>
  x === '' ||
  (isArray(x) && x.length) === 0 ||
  (isObject(x) && Object.keys(x).length === 0);

/**
 * Negates a boolean value
 *
 * @param {boolean} x - The boolean value to negate
 * @returns {boolean} The negated boolean value
 */
const not = (x) => !x;

/**
 * Callback for file path
 *
 * @callback callback
 * @param {string} p file path
 */
/**
 * @returns {callback} piped function
 * @param {callback[]} fns callback functions
 */
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

/**
 * Checks if a value isnt an empty value
 *
 * @param {any} x - The value to check
 * @returns {boolean} - Returns true if the value isnt an empty value, false otherwise
 */
const isNotEmpty = pipe(isEmpty, not);

/**
 * Template function with the specified template
 *
 * @callback templateFunction
 * @param {...string} data - param array
 * @returns {string} - String with replaced template variables
 */
/**
 * Get template function for a template string
 *
 * @param {string} tpl - The template string to be replaced
 * @returns {templateFunction} - A function that takes in data and replaces the template variables with the corresponding values from the data object
 */
const template =
  (tpl) =>
  (...data) =>
    tpl.replace(
      new RegExp(TEMPLATE_VARIABLE_REGEXP, 'g'),
      (_, key) => data[key.trim()]
    );

module.exports = {
  isObject,
  isNil,
  isEmpty,
  isNotEmpty,
  pipe,
  template,
};
