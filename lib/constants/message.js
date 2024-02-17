/**
 * @file Message templates
 * @author Huan Luo
 */

export const NAMING_PATTERN_OBJECT_ERROR_MESSAGE =
  'The naming pattern object "{{ value }}" does not appear to be an Object type, please double-check it and try again';

export const PATTERN_ERROR_MESSAGE =
  'There is an invalid pattern "{{ value }}", please double-check it and try again';

export const PREFINED_MATCH_SYNTAX_ERROR_MESSAGE =
  'The prefined match "{{ namingPattern }}" is not found in the pattern "{{ filenamePattern }}", please double-check it and try again';

export const FILENAME_BLOCKLIST_ERROR_MESSAGE =
  'The filename "{{ filename }}" matches the blocklisted "{{ blockListPattern }}" pattern, use a pattern like "{{ suggestion }}" instead';

export const FILENAME_NAMING_CONVENTION_ERROR_MESSAGE =
  'The filename "{{ filename }}" does not match the "{{ originalNamingPattern }}" pattern';

export const FOLDER_MATCH_WITH_FEX_ERROR_MESSAGE =
  'The folder of the file "{{ filenameWithPath }}" does not match the "{{ folderPattern }}" pattern';

export const FOLDER_NAMING_CONVENTION_ERROR_MESSAGE =
  'The folder "{{ folder }}" does not match the "{{ namingPattern }}" pattern';

export const NO_INDEX_ERROR_MESSAGE = 'The filename "index" is not allowed';
