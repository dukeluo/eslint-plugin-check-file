/**
 * @file Entry point for all rules
 * @author Huan Luo
 */

import FilenameBlocklist from './rules/filename-blocklist.js';
import FilenameNamingConvention from './rules/filename-naming-convention.js';
import FolderMatchWithFex from './rules/folder-match-with-fex.js';
import FolderNamingConvention from './rules/folder-naming-convention.js';
import NoIndex from './rules/no-index.js';

export const rules = {
  'filename-blocklist': FilenameBlocklist,
  'filename-naming-convention': FilenameNamingConvention,
  'folder-match-with-fex': FolderMatchWithFex,
  'folder-naming-convention': FolderNamingConvention,
  'no-index': NoIndex,
};

const plugin = {
  meta: {
    name: 'eslint-plugin-check-file',
    version: '2.8.0',
  },
  rules,
};

export default plugin;
