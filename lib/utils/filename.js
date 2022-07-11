/**
 * @fileoverview Utils about filename
 * @author Duke Luo
 */
'use strict';

const path = require('path');

/**
 * @type {string} filename without path
 * @param {string} p filename concat with path in posix style
 */
const getFilename = (p) => path.posix.basename(p);

/**
 * @type {string} path of folder
 * @param {string} p filename concat with path in posix style
 */
const getFolderPath = (p) => path.join(path.posix.dirname(p), path.posix.sep);

/**
 * @type {string} base name
 * @param {string} filename filename without path
 * @param {boolean} [ignoreMiddleExtensions=false] flag to ignore middle extensions
 */
const getBasename = (filename, ignoreMiddleExtensions = false) =>
  filename.substring(
    0,
    ignoreMiddleExtensions ? filename.indexOf('.') : filename.lastIndexOf('.')
  );

/**
 * @type {string[]} all folders
 * @param {string} p path of folder in posix style
 */
const getAllFolders = (p) =>
  p.split(path.posix.sep).filter((folder) => folder !== '');

/**
 * @type {string[]} all sub paths
 * @param {string} p path of folder in posix style
 */
const getSubPaths = (p) => {
  const folders = getAllFolders(p);
  let subPaths = [];

  const handler = (array) =>
    array.reduce((acc, folder, index) => {
      if (folder) {
        acc.push(
          index === 0
            ? path.join(folder, path.posix.sep)
            : path.join(acc[acc.length - 1], folder, path.posix.sep)
        );
      }
      return acc;
    }, []);

  for (let i = 0; i < folders.length; i++) {
    subPaths = subPaths.concat(handler(folders.slice(i)));
  }

  return subPaths;
};

/**
 * @type {string} path from repository root
 * @param {string} fullPath filename with full path in posix style
 * @param {string} repositoryRoot path of repository root in posix style
 */
const getPathFromRepositoryRoot = (fullPath, repositoryRoot) =>
  fullPath.replace(path.join(repositoryRoot, path.posix.sep), '');

/**
 * @type {string} file path in posix style
 * @param {string} p file path based on the operating system
 */
const toPosixPath = (p) => p.split(path.sep).join(path.posix.sep);

module.exports = {
  getFolderPath,
  getFilename,
  getBasename,
  getSubPaths,
  getAllFolders,
  getPathFromRepositoryRoot,
  toPosixPath,
};
