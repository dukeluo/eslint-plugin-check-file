/**
 * @file A file cannot be named "index"
 * @author Duke Luo
 */
'use strict';

const path = require('path');
const proxyquire = require('proxyquire');
const RuleTester = require('eslint').RuleTester;

const rule = proxyquire('../../../lib/rules/no-index', {
  path: { ...path.posix, '@global': true },
});
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
          message: 'The filename "index" is not allowed',
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
          message: 'The filename "index" is not allowed',
          column: 1,
          line: 1,
        },
      ],
    },
  ],
});
