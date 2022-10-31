/**
 * @file A file cannot be named "index"
 * @author Duke Luo
 */
'use strict';

const rule = require('../../../lib/rules/no-index');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('no-index', rule, {
  valid: [
    {
      code: "var foo = 'bar';",
      filename: 'src/components/login.jsx',
    },
    {
      code: "var foo = 'bar';",
      filename: 'src/utils/calculatePrice.js',
    },
  ],

  invalid: [
    {
      code: "var foo = 'bar';",
      filename: 'src/utils/index.js',
      errors: [
        {
          message:
            'The filename "index" is not allowed, please use another one',
          column: 1,
          line: 1,
        },
      ],
    },
    {
      code: "var foo = 'bar';",
      filename: 'src/utils/index.ts',
      errors: [
        {
          message:
            'The filename "index" is not allowed, please use another one',
          column: 1,
          line: 1,
        },
      ],
    },
  ],
});
