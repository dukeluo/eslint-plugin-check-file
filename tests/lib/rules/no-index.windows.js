/**
 * @file A file cannot be named "index"
 * @author Huan Luo
 */

import { RuleTester } from 'eslint';
import esmock from 'esmock';
import { win32 } from 'path';

const rule = await esmock(
  '../../../lib/rules/no-index.js',
  {},
  {
    path: win32,
  }
);
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
    {
      code: "var foo = 'bar';",
      filename: 'src\\utils\\index.config.js',
    },
    {
      code: "var foo = 'bar';",
      filename: 'index.config.ts',
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

ruleTester.run(
  'no-index with option on Windows: [{ ignoreMiddleExtensions: true }]',
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\login.jsx',
        options: [{ ignoreMiddleExtensions: true }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'calculatePrice.js',
        options: [{ ignoreMiddleExtensions: true }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\index.js',
        options: [{ ignoreMiddleExtensions: true }],
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
        filename: 'index.ts',
        options: [{ ignoreMiddleExtensions: true }],
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
        filename: 'src\\utils\\index.config.js',
        options: [{ ignoreMiddleExtensions: true }],
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
        filename: 'index.config.ts',
        options: [{ ignoreMiddleExtensions: true }],
        errors: [
          {
            message: 'The filename "index" is not allowed',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);
