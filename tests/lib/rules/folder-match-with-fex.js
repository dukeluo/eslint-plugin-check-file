/**
 * @fileoverview The folder should match the naming pattern specified by the file extension
 * @author Duke Luo
 */
'use strict';

const rule = require('../../../lib/rules/folder-match-with-fex');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("[{ '*.js': '**/__tests__/' }]", rule, {
  valid: [
    {
      code: "var foo = 'bar';",
      filename: '/__tests__/foo.test.js',
      options: [{ '*.js': '**/__tests__/' }],
    },
    {
      code: "var foo = 'bar';",
      filename: '__tests__/foo.test.js',
      options: [{ '*.js': '**/__tests__/' }],
    },
    {
      code: "var foo = 'bar';",
      filename: 'bar/__tests__/foo.test.js',
      options: [{ '*.js': '**/__tests__/' }],
    },
    {
      code: "var foo = 'bar';",
      filename: '/bar/__tests__/foo.test.js',
      options: [{ '*.js': '**/__tests__/' }],
    },
  ],

  invalid: [
    {
      code: "var foo = 'bar';",
      filename: '/bar/__test__/foo.test.js',
      options: [{ '*.js': '**/__tests__/' }],
      errors: [
        {
          message:
            'The folder of the file "/bar/__test__/foo.test.js" does not match "**/__tests__/"',
          column: 1,
          line: 1,
        },
      ],
    },
  ],
});

ruleTester.run("[{ '*.js': '*/__tests__/' }]", rule, {
  valid: [
    {
      code: "var foo = 'bar';",
      filename: '/__tests__/foo.test.js',
      options: [{ '*.js': '*/__tests__/' }],
    },
    {
      code: "var foo = 'bar';",
      filename: 'bar/__tests__/foo.test.js',
      options: [{ '*.js': '*/__tests__/' }],
    },
  ],
  invalid: [
    {
      code: "var foo = 'bar';",
      filename: '/__test__/foo.test.js',
      options: [{ '*.js': '*/__tests__/' }],
      errors: [
        {
          message:
            'The folder of the file "/__test__/foo.test.js" does not match "*/__tests__/"',
          column: 1,
          line: 1,
        },
      ],
    },
    {
      code: "var foo = 'bar';",
      filename: '/bar/__tests__/foo.test.js',
      options: [{ '*.js': '*/__tests__/' }],
      errors: [
        {
          message:
            'The folder of the file "/bar/__tests__/foo.test.js" does not match "*/__tests__/"',
          column: 1,
          line: 1,
        },
      ],
    },
    {
      code: "var foo = 'bar';",
      filename: '__tests__/foo.test.js',
      options: [{ '*.js': '*/__tests__/' }],
      errors: [
        {
          message:
            'The folder of the file "__tests__/foo.test.js" does not match "*/__tests__/"',
          column: 1,
          line: 1,
        },
      ],
    },
  ],
});

ruleTester.run("[{ '*.test.{js,jsx,ts,tsx}': '*/__tests__/' }]", rule, {
  valid: [
    {
      code: "var foo = 'bar';",
      filename: 'bar/__tests__/foo.test.js',
      options: [{ '*.test.{js,jsx,ts,tsx}': '*/__tests__/' }],
    },
    {
      code: "var foo = 'bar';",
      filename: 'bar/__tests__/foo.test.jsx',
      options: [{ '*.test.{js,jsx,ts,tsx}': '*/__tests__/' }],
    },
    {
      code: "var foo = 'bar';",
      filename: 'bar/__tests__/foo.test.ts',
      options: [{ '*.test.{js,jsx,ts,tsx}': '*/__tests__/' }],
    },
    {
      code: "var foo = 'bar';",
      filename: 'bar/__tests__/foo.test.tsx',
      options: [{ '*.test.{js,jsx,ts,tsx}': '*/__tests__/' }],
    },
  ],
  invalid: [
    {
      code: "var foo = 'bar';",
      filename: 'bar/_tests_/foo.test.js',
      options: [{ '*.test.{js,jsx,ts,tsx}': '*/__tests__/' }],
      errors: [
        {
          message:
            'The folder of the file "bar/_tests_/foo.test.js" does not match "*/__tests__/"',
          column: 1,
          line: 1,
        },
      ],
    },
    {
      code: "var foo = 'bar';",
      filename: 'bar/_tests_/foo.test.jsx',
      options: [{ '*.test.{js,jsx,ts,tsx}': '*/__tests__/' }],
      errors: [
        {
          message:
            'The folder of the file "bar/_tests_/foo.test.jsx" does not match "*/__tests__/"',
          column: 1,
          line: 1,
        },
      ],
    },
    {
      code: "var foo = 'bar';",
      filename: 'bar/_tests_/foo.test.ts',
      options: [{ '*.test.{js,jsx,ts,tsx}': '*/__tests__/' }],
      errors: [
        {
          message:
            'The folder of the file "bar/_tests_/foo.test.ts" does not match "*/__tests__/"',
          column: 1,
          line: 1,
        },
      ],
    },
    {
      code: "var foo = 'bar';",
      filename: 'bar/_tests_/foo.test.tsx',
      options: [{ '*.test.{js,jsx,ts,tsx}': '*/__tests__/' }],
      errors: [
        {
          message:
            'The folder of the file "bar/_tests_/foo.test.tsx" does not match "*/__tests__/"',
          column: 1,
          line: 1,
        },
      ],
    },
  ],
});

ruleTester.run(
  "[{ '*.test.js': '*/__tests__/', '*.test.ts': '*/__tests__/' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'bar/__tests__/foo.test.js',
        options: [{ '*.test.js': '*/__tests__/', '*.test.ts': '*/__tests__/' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'bar/__tests__/foo.test.ts',
        options: [{ '*.test.js': '*/__tests__/', '*.test.ts': '*/__tests__/' }],
      },
    ],
    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'bar/_tests_/foo.test.js',
        options: [{ '*.test.js': '*/__tests__/', '*.test.ts': '*/__tests__/' }],
        errors: [
          {
            message:
              'The folder of the file "bar/_tests_/foo.test.js" does not match "*/__tests__/"',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'bar/_tests_/foo.test.ts',
        options: [{ '*.test.js': '*/__tests__/', '*.test.ts': '*/__tests__/' }],
        errors: [
          {
            message:
              'The folder of the file "bar/_tests_/foo.test.ts" does not match "*/__tests__/"',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run('fex that has not been set', rule, {
  valid: [
    {
      code: "var foo = 'bar';",
      filename: '/bar/__test__/foo.test.ts',
      options: [{ '*.js': '**/__tests__/', '*.jsx': '**/__tests__/' }],
    },
  ],
  invalid: [],
});
