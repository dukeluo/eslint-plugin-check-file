/* eslint-disable jsdoc/valid-types */
/**
 * @file Utils about prefined match syntax
 * @author David Ratier, Duke Luo
 */
'use strict';

const micromatch = require('micromatch');
const { isNil, isEmpty } = require('../utils/utility');
const { PREFINED_MATCH_SYNTAX_REGEXP } = require('../constants/regex');
const { PREFINED_MATCH_SYNTAX_ERROR_MESSAGE } = require('../constants/message');

/**
 * Takes in a rule and transforms it if it contains prefined match syntax
 *
 * @typedef {string} filenamePattern original filename pattern
 * @typedef {string} namingPattern original naming pattern
 * @typedef {[filenamePattern, namingPattern]} rule
 * @param {rule} rule original rule
 * @param {string} filenameWithPath filename with path
 * @returns {rule} new rule
 * @throws {Error} if a prefined match syntax referenced in the naming pattern is not found in the filename pattern
 */
const transformRuleWithPrefinedMatchSyntax = (
  [filenamePattern, namingPattern],
  filenameWithPath
) => {
  const keyCaptureGroups = micromatch.capture(
    filenamePattern,
    filenameWithPath
  );

  if (isNil(keyCaptureGroups)) {
    return [filenamePattern, namingPattern];
  }

  const valueCaptureGroups = [
    ...namingPattern.matchAll(new RegExp(PREFINED_MATCH_SYNTAX_REGEXP, 'g')),
  ];

  if (isEmpty(valueCaptureGroups)) {
    return [filenamePattern, namingPattern];
  }

  const newNamingPattern = valueCaptureGroups.reduce((value, group) => {
    const groupIndex = +group[1];

    if (isNil(keyCaptureGroups[groupIndex])) {
      throw new Error(
        PREFINED_MATCH_SYNTAX_ERROR_MESSAGE(namingPattern, filenamePattern)
      );
    }

    return value.replace(group[0], keyCaptureGroups[groupIndex]);
  }, namingPattern);

  return [filenamePattern, newNamingPattern];
};

module.exports = {
  transformRuleWithPrefinedMatchSyntax,
};
