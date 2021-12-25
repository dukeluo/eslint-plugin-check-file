/**
 * @fileoverview The filename should follow the filename naming convention
 * @author Duke Luo
 */
'use strict';

const rule = require('../../../lib/rules/filename-naming-convention'),
  RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester();

ruleTester.run('filename-naming-convention', rule, {
  valid: [],

  invalid: [
    {
      code: '',
      errors: [{ message: 'Fill me in.', type: 'Me too' }],
    },
  ],
});
