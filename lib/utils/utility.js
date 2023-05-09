/**
 * @file A utility file containing useful functions
 * @author Duke Luo
 */
'use strict';

/**
 * Checks if the given argument is an object
 *
 * @param {any} x - The argument to check
 * @returns {boolean} - True if the argument is an object, false otherwise
 */
const isObject = (x) => Object.prototype.toString.call(x) === '[object Object]';

module.exports = {
  isObject,
};
