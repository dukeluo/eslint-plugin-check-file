/**
 * @fileoverview The folder should match the rules specified by the file extension
 * @author Duke Luo
 */
'use strict';

const rule = require('../../../lib/rules/match-with-fex');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('match-with-fex', rule, {
  valid: [
    {
      code: "var foo = 'bar';",
      filename: '/__tests__/foo.test.js',
      options: ['always', { '.js': '*/__tests__/' }],
    },
    // {
    //   code: "var foo = 'bar';",
    //   filename: '__tests__/foo.test.js',
    //   options: ['always', { '.js': '*/__tests__/' }],
    // },
    {
      code: "var foo = 'bar';",
      filename: 'bar/__tests__/foo.test.js',
      options: ['always', { '.js': '*/__tests__/' }],
    },
    // {
    //   code: "var foo = 'bar';",
    //   filename: '/bar/__tests__/foo.test.js',
    //   options: ['always', { '.js': '*/__tests__/' }],
    // },
  ],

  invalid: [
    {
      code: "var foo = 'bar';",
      filename: '/__test__/foo.test.js',
      options: ['always', { '.js': '*/__tests__/' }],
      errors: [
        {
          message:
            'The folder of the file "/__test__/foo.test.js" does not match "*/__tests__/"',
          column: 1,
          line: 1,
        },
      ],
    },
  ],
});
