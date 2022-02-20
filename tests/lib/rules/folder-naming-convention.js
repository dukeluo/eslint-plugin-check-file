/**
 * @fileoverview The folder should follow the folder naming convention
 * @author Duke Luo
 */
'use strict';

const rule = require('../../../lib/rules/folder-naming-convention');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run(
  "folder-naming-convention with option: [{ '*/__tests__/': 'PASCAL_CASE', 'src/*': 'CAMEL_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/DisplayLabel/__tests__/displayLabel.test.js',
        options: [{ '*/__tests__/': 'PASCAL_CASE', 'src/*': 'CAMEL_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/Components/DisplayLabel/__tests__/displayLabel.test.js',
        options: [{ '*/__tests__/': 'PASCAL_CASE', 'src/*': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The folder "Components" does not match the "CAMEL_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/components/displayLabel/__tests__/displayLabel.test.js',
        options: [{ '*/__tests__/': 'PASCAL_CASE', 'src/*': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The folder "displayLabel" does not match the "PASCAL_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  'folder-naming-convention with folder that has not been set',
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'scripts/build.js',
        options: [{ '*/__tests__/': 'PASCAL_CASE', 'src/*': 'CAMEL_CASE' }],
      },
    ],

    invalid: [],
  }
);

ruleTester.run(
  "folder-naming-convention with option: [{ '*/__tests__/': 'FOO', 'src/*': 'CAMEL_CASE' }]",
  rule,
  {
    valid: [],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
        options: [{ '*/__tests__/': 'FOO', 'src/*': 'CAMEL_CASE' }],
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
  "filename-naming-convention with option: [{ '*/__tests__/': 'PASCAL_CASE', 'src/': 'CAMEL_CASE' }]",
  rule,
  {
    valid: [],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
        options: [{ '*/__tests__/': 'PASCAL_CASE', 'src/': 'CAMEL_CASE' }],
        errors: [
          {
            message: 'There is an invalid pattern "src/", please check it',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);
