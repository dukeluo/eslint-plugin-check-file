/**
 * @fileoverview Utils about filename
 * @author Duke Luo
 */
'use strict';

/**
 * @type {string} filename without path
 * @param {string} path filename concat with path
 */
const getFilename = (path) => path.substring(path.lastIndexOf('/') + 1);

/**
 * @type {string} folder
 * @param {string} path filename concat with path
 */
const getFolder = (path) => path.substring(0, path.lastIndexOf('/') + 1);

module.exports = {
  getFolder,
  getFilename,
};
