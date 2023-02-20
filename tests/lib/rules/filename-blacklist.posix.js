/**
 * @file The filename should not be blacklisted
 * @author Florian Ehmke, Duke Luo
 */
'use strict';

const path = require('path');
const proxyquire = require('proxyquire');
const RuleTester = require('eslint').RuleTester;

const rule = proxyquire('../../../lib/rules/filename-blacklist', {
  path: { ...path.posix, '@global': true },
});
const ruleTester = new RuleTester();

ruleTester.run(
  "filename-blacklist with option: [{ '*.models.ts': '*.model.ts', '*.utils.ts': '*.util.ts' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/foo.model.ts',
        options: [{ '*.models.ts': '*.model.ts', '*.utils.ts': '*.util.ts' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/foo.util.ts',
        options: [{ '*.models.ts': '*.model.ts', '*.utils.ts': '*.util.ts' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/foo.apis.ts',
        options: [{ '*.models.ts': '*.model.ts', '*.utils.ts': '*.util.ts' }],
      },
    ],
    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/foo.models.ts',
        options: [{ '*.models.ts': '*.model.ts', '*.utils.ts': '*.util.ts' }],
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
        filename: 'src/foo.utils.ts',
        options: [{ '*.models.ts': '*.model.ts', '*.utils.ts': '*.util.ts' }],
        errors: [
          {
            message:
              'The filename "foo.utils.ts" matches the blacklisted "*.utils.ts" pattern. Use a pattern like "*.util.ts" instead.',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-blacklist with option: [{ '*.models.ts': 'FOO' }]",
  rule,
  {
    valid: [],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/foo.models.ts',
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
  "filename-blacklist with option: [{ 'models.ts': '*.model.ts' }]",
  rule,
  {
    valid: [],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/foo.models.ts',
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
