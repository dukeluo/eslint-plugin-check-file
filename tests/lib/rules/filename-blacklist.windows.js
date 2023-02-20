/**
 * @file The filename should not be blacklisted
 * @author Duke Luo
 */
'use strict';

const path = require('path');
const proxyquire = require('proxyquire');
const RuleTester = require('eslint').RuleTester;

const rule = proxyquire('../../../lib/rules/filename-blacklist', {
  path: { ...path.win32, '@global': true },
});
const ruleTester = new RuleTester();

ruleTester.run(
  "filename-blacklist with option on Windows: [{ '*.models.ts': '*.model.ts' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'C:\\Users\\Administrator\\Downloads\\wai\\src\\foo.model.ts',
        options: [{ '*.models.ts': '*.model.ts' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\foo.model.ts',
        options: [{ '*.models.ts': '*.model.ts' }],
      },
    ],
    invalid: [
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\foo.models.ts',
        options: [{ '*.models.ts': '*.model.ts' }],
        errors: [
          {
            message:
              'The filename "foo.models.ts" matches the blacklisted "*.models.ts" pattern. Use a pattern like "*.model.ts" instead.',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\foo.models.ts',
        options: [{ '*.models.ts': '*.model.ts' }],
        errors: [
          {
            message:
              'The filename "foo.models.ts" matches the blacklisted "*.models.ts" pattern. Use a pattern like "*.model.ts" instead.',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-blacklist with option on Windows: [{ '*.models.ts': 'FOO' }]",
  rule,
  {
    valid: [],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\foo.models.ts',
        options: [{ '*.models.ts': 'FOO' }],
        errors: [
          {
            message: 'There is an invalid pattern "FOO", please check it',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-blacklist with option on Windows: [{ 'models.ts': '*.model.ts' }]",
  rule,
  {
    valid: [],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\foo.models.ts',
        options: [{ 'models.ts': '*.model.ts' }],
        errors: [
          {
            message: 'There is an invalid pattern "models.ts", please check it',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);
