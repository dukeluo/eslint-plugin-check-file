/**
 * @fileoverview The folder should follow the folder naming convention
 * @author Duke Luo
 */
'use strict';

const rule = require('../../../lib/rules/folder-naming-convention');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('folder-naming-convention', rule, {
  valid: [],

  invalid: [
    {
      code: '',
      errors: [{ message: 'Fill me in.', type: 'Me too' }],
    },
  ],
});
