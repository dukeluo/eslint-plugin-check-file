/**
 * @file Utils about filename
 * @author Duke Luo
 */
'use strict';

const path = require('path');

/**
 * @returns {string} filename without path
 * @param {string} p filename concat with path in posix style
 */
const getFilename = (p) => path.posix.basename(p);

/**
 * @returns {string} path of folder
 * @param {string} p filename concat with path in posix style
 */
const getFolderPath = (p) =>
  path.posix.join(path.posix.dirname(p), path.posix.sep);

/**
 * @returns {string} base name
 * @param {string} filename filename without path
 * @param {boolean} [ignoreMiddleExtensions=false] flag to ignore middle extensions
 */
const getBasename = (filename, ignoreMiddleExtensions = false) =>
  filename.substring(
    0,
    ignoreMiddleExtensions ? filename.indexOf('.') : filename.lastIndexOf('.')
  );

/**
 * @returns {string[]} all folders
 * @param {string} p path of folder in posix style
 */
const getAllFolders = (p) =>
  p.split(path.posix.sep).filter((folder) => folder !== '');

/**
 * @returns {string[]} all sub paths
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
            ? path.posix.join(folder, path.posix.sep)
            : path.posix.join(acc[acc.length - 1], folder, path.posix.sep)
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
 * @returns {string} path from repository root
 * @param {string} fullPath filename with full path
 * @param {string} repositoryRoot path of repository root
 */
const getPathFromRepositoryRoot = (fullPath, repositoryRoot) =>
  fullPath.replace(path.join(repositoryRoot, path.sep), '');

/**
 * @returns {string} file path in posix style
 * @param {string} p file path based on the operating system
 */
const toPosixPath = (p) => p.split(path.sep).join(path.posix.sep);

/**
 * @returns {string} file path without drive letter on windows
 * @param {string} p file path on windows
 */
const removeDriveLetter = (p) => p.replace(/^[A-Za-z]:\\/, '');

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

/** @typedef {module:eslint} ESLint */
/**
 * @returns {string} file path in posix style
 * @param {ESLint.Rule.RuleContext} context rule eslint context
 */
const getFilePath = (context) => {
  const pathFromRoot = getPathFromRepositoryRoot(
    context.getPhysicalFilename(),
    context.getCwd()
  );

  return pipe(removeDriveLetter, toPosixPath)(pathFromRoot);
};

module.exports = {
  getFolderPath,
  getFilename,
  getBasename,
  getSubPaths,
  getAllFolders,
  getFilePath,
};
