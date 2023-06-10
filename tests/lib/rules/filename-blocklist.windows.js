/**
 * @file The filename should be blocklisted
 * @author Huan Luo
 */
'use strict';

const path = require('path');
const proxyquire = require('proxyquire');
const RuleTester = require('eslint').RuleTester;

const rule = proxyquire('../../../lib/rules/filename-blocklist', {
  path: { ...path.win32, '@global': true },
});
const ruleTester = new RuleTester();

ruleTester.run(
  "filename-blocklist with option on Windows: [{ '*.models.ts': '*.model.ts' }]",
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
              'The filename "foo.models.ts" matches the blocklisted "*.models.ts" pattern, use a pattern like "*.model.ts" instead',
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
              'The filename "foo.models.ts" matches the blocklisted "*.models.ts" pattern, use a pattern like "*.model.ts" instead',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-blocklist with option on Windows: [{ 'src/*.models.ts': '*.model.ts' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'C:\\Users\\Administrator\\Downloads\\wai\\src\\foo.model.ts',
        options: [{ 'src/*.models.ts': '*.model.ts' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\foo.model.ts',
        options: [{ 'src/*.models.ts': '*.model.ts' }],
      },
    ],
    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\foo.models.ts',
        options: [{ 'src/*.models.ts': '*.model.ts' }],
        errors: [
          {
            message:
              'The filename "foo.models.ts" matches the blocklisted "src/*.models.ts" pattern, use a pattern like "*.model.ts" instead',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-blocklist with option on Windows: [{ '*.models.ts': 'FOO' }]",
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
            message:
              'There is an invalid pattern "FOO", please double-check it and try again',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-blocklist with option on Windows: [{ 'models.ts': '*.model.ts' }]",
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
            message:
              'There is an invalid pattern "models.ts", please double-check it and try again',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run('filename-blocklist with option on Windows: []', rule, {
  valid: [],

  invalid: [
    {
      code: "var foo = 'bar';",
      filename: 'src\\foo.models.ts',
      options: [],
      errors: [
        {
          message: `The naming pattern object "undefined" does not appear to be an Object type, please double-check it and try again`,
          column: 1,
          line: 1,
        },
      ],
    },
  ],
});
