/**
 * @file A file cannot be named "index"
 * @author Duke Luo
 */
'use strict';

const path = require('path');
const proxyquire = require('proxyquire');
const RuleTester = require('eslint').RuleTester;

const rule = proxyquire('../../../lib/rules/no-index', {
  path: { ...path.win32, '@global': true },
});
const ruleTester = new RuleTester();

ruleTester.run('no-index on Windows', rule, {
  valid: [
    {
      code: "var foo = 'bar';",
      filename: 'C:\\Users\\Administrator\\Downloads\\wai\\src\\main.js',
    },
    {
      code: "var foo = 'bar';",
      filename: 'src\\main.ts',
    },
  ],

  invalid: [
    {
      code: "var foo = 'bar';",
      filename: 'C:\\Users\\Administrator\\Downloads\\wai\\src\\index.js',
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
      filename: 'src\\index.ts',
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
