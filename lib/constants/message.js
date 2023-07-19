/**
 * @file Message templates
 * @author Huan Luo
 */

import { template } from '../utils/utility.js';

export const NAMING_PATTERN_OBJECT_ERROR_MESSAGE = template(
  'The naming pattern object "$0" does not appear to be an Object type, please double-check it and try again'
);

export const PATTERN_ERROR_MESSAGE = template(
  'There is an invalid pattern "$0", please double-check it and try again'
);

export const PREFINED_MATCH_SYNTAX_ERROR_MESSAGE = template(
  'The prefined match "$0" is not found in the pattern "$1", please double-check it and try again'
);

export const FILENAME_BLOCKLIST_ERROR_MESSAGE = template(
  'The filename "$0" matches the blocklisted "$1" pattern, use a pattern like "$2" instead'
);

export const FILENAME_NAMING_CONVENTION_ERROR_MESSAGE = template(
  'The filename "$0" does not match the "$1" pattern'
);

export const FOLDER_MATCH_WITH_FEX_ERROR_MESSAGE = template(
  'The folder of the file "$0" does not match the "$1" pattern'
);

export const FOLDER_NAMING_CONVENTION_ERROR_MESSAGE = template(
  'The folder "$0" does not match the "$1" pattern'
);

export const NO_INDEX_ERROR_MESSAGE = 'The filename "index" is not allowed';
