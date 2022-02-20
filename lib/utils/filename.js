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
 * @type {string} path of folder
 * @param {string} path filename concat with path
 */
const getFolder = (path) => path.substring(0, path.lastIndexOf('/') + 1);

/**
 * @type {string} base name
 * @param {string} filename filename without path
 */
const getBasename = (filename) =>
  filename.substring(0, filename.lastIndexOf('.'));

/**
 * @type {string[]} all sub paths
 * @param {string} folder path of folder
 */
const getSubPaths = (path) => {
  const folders = path.split('/').filter((folder) => folder !== '');
  let subPaths = [];

  const handler = (array) =>
    array.reduce((acc, folder, index) => {
      if (folder) {
        acc.push(index === 0 ? folder : `${acc[acc.length - 1]}/${folder}`);
      }
      return acc;
    }, []);

  for (let i = 0; i < folders.length; i++) {
    subPaths = subPaths.concat(handler(folders.slice(i)));
  }

  return subPaths;
};

module.exports = {
  getFolder,
  getFilename,
  getBasename,
  getSubPaths,
};
