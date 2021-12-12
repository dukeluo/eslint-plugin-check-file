/**
 * @fileoverview Utils about filename
 * @author Duke Luo
 */
'use strict';

/**
 * @type {string} file extension
 * @param {string} path filename concat with path
 */
const getFileExtension = (path) => path.substring(path.lastIndexOf('.'));

/**
 * @type {string} folder
 * @param {string} path filename concat with path
 */
const getFolder = (path) => path.substring(0, path.lastIndexOf('/') + 1);

module.exports = { getFileExtension, getFolder };
