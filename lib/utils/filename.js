/**
 * @file Utils about filename
 * @author Huan Luo
 */
'use strict';

const path = require('path');
const { pipe, isNotEmpty } = require('./utility');
const { WINDOWS_DRIVE_LETTER_REGEXP } = require('../constants/regex');

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
const getAllFolders = (p) => p.split(path.posix.sep).filter(isNotEmpty);

/**
 * @example
 * returns ['src/', 'src/DisplayLabel/', 'src/DisplayLabel/__tests__/', 'DisplayLabel/__tests__]
 * getSubPaths('src/DisplayLabel/__tests__/');
 * @returns {string[]} subpaths
 * @param {string} p path of folder in posix style
 */
const getSubPaths = (p) => {
  const folders = getAllFolders(p);
  let subPaths = [];

  const walk = (array) =>
    array.reduce((acc, folder, index) => {
      const subpath = path.posix.join(acc, folder, path.posix.sep);

      if (index >= 1) subPaths.push(subpath);

      return subpath;
    }, '');

  for (let i = 0; i < folders.length; i++) {
    walk(folders.slice(i));
  }
  subPaths.unshift(path.posix.join(folders[0], path.posix.sep));

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
const removeDriveLetter = (p) => p.replace(WINDOWS_DRIVE_LETTER_REGEXP, '');

/**
 * @returns {string} file path in posix style
 * @param {import('eslint').Rule.RuleContext} context rule eslint context
 */
const getFilePath = (context) => {
  const pathFromRoot = getPathFromRepositoryRoot(
    context.physicalFilename || context.getPhysicalFilename(),
    context.cwd || context.getCwd()
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
