const micromatch = require('micromatch');

/**
 * Takes in a ruleset and transforms it if it contains capture groups
 *
 * @param {Array} ruleset ruleset
 * @param {Array} ruleset.0 glob
 * @param {Array} ruleset.1 rule to transform
 * @param {string} filenameWithPath filename with path
 * @returns {Array} [glob, rule]
 */
function transformRuleWithGroupCapture([glob, rule], filenameWithPath) {
  const keyCaptureGroups = micromatch.capture(glob, filenameWithPath);

  if (!keyCaptureGroups) {
    return [glob, rule];
  }

  const valueCaptureGroupRegex = /<(\d+)>/g;
  const valueCaptureGroups = [...rule.matchAll(valueCaptureGroupRegex)];

  if (!valueCaptureGroups || !valueCaptureGroups.length) {
    return [glob, rule];
  }

  const newRule = valueCaptureGroups.reduce((value, group) => {
    const groupIndex = +group[1];
    if (!keyCaptureGroups || keyCaptureGroups[groupIndex] === undefined) {
      throw new Error(
        `The capture group "${rule}" is not found in the glob "${glob}"`
      );
    }
    return value.replace(group[0], keyCaptureGroups[+group[1]]);
  }, rule);

  return [glob, newRule];
}

module.exports = {
  transformRuleWithGroupCapture,
};
