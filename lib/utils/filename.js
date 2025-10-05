/**
 * @file Utils about filename
 * @author Huan Luo
 */

import { join, posix, sep } from 'path';
import { WINDOWS_DRIVE_LETTER_REGEXP } from '../constants/regex.js';
import { isNotEmpty, pipe } from './utility.js';

/**
 * @returns {string} filename without path
 * @param {string} p filename concat with path in posix style
 */
export const getFilename = (p) => posix.basename(p);

/**
 * @returns {string} path of folder
 * @param {string} p filename concat with path in posix style
 */
export const getFolderPath = (p) => posix.join(posix.dirname(p), posix.sep);

/**
 * @returns {string} base name
 * @param {string} filename filename without path
 * @param {boolean} [ignoreMiddleExtensions] flag to ignore middle extensions
 */
export const getBasename = (filename, ignoreMiddleExtensions = false) => {
  const findDotsOutsideBrackets = (str) => {
    const positions = [];
    let depth = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '[') depth++;
      else if (str[i] === ']') depth--;
      else if (str[i] === '.' && depth === 0) {
        positions.push(i);
      }
    }
    return positions;
  };

  const dotPositions = findDotsOutsideBrackets(filename);

  if (dotPositions.length === 0) {
    return filename;
  }

  const curPosition = ignoreMiddleExtensions
    ? dotPositions[0]
    : dotPositions[dotPositions.length - 1];

  return filename.substring(0, curPosition);
};

/**
 * @returns {string[]} all folders
 * @param {string} p path of folder in posix style
 */
export const getAllFolders = (p) => p.split(posix.sep).filter(isNotEmpty);

/**
 * @example
 * returns ['src/', 'src/DisplayLabel/', 'src/DisplayLabel/__tests__/', 'DisplayLabel/__tests__]
 * getSubPaths('src/DisplayLabel/__tests__/');
 * @returns {string[]} subpaths
 * @param {string} p path of folder in posix style
 */
export const getSubPaths = (p) => {
  const folders = getAllFolders(p);
  let subPaths = [];

  const walk = (array) =>
    array.reduce((acc, folder, index) => {
      const subpath = posix.join(acc, folder, posix.sep);

      if (index >= 1) subPaths.push(subpath);

      return subpath;
    }, '');

  for (let i = 0; i < folders.length; i++) {
    walk(folders.slice(i));
  }
  subPaths.unshift(posix.join(folders[0], posix.sep));

  return subPaths;
};

/**
 * @returns {string} path from repository root
 * @param {string} fullPath filename with full path
 * @param {string} repositoryRoot path of repository root
 */
const getPathFromRepositoryRoot = (fullPath, repositoryRoot) =>
  fullPath.replace(join(repositoryRoot, sep), '');

/**
 * @returns {string} file path in posix style
 * @param {string} p file path based on the operating system
 */
const toPosixPath = (p) => p.split(sep).join(posix.sep);

/**
 * @returns {string} file path without drive letter on windows
 * @param {string} p file path on windows
 */
const removeDriveLetter = (p) => p.replace(WINDOWS_DRIVE_LETTER_REGEXP, '');

/**
 * @returns {string} file path in posix style
 * @param {import('eslint').Rule.RuleContext} context rule eslint context
 */
export const getFilePath = (context) => {
  const pathFromRoot = getPathFromRepositoryRoot(
    context.physicalFilename,
    context.cwd
  );

  return pipe(removeDriveLetter, toPosixPath)(pathFromRoot);
};
