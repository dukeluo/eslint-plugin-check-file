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

ruleTester.run(
  "no-index with option on Windows: [{ folderPaths: ['*'] }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\login.jsx',
        options: [{ folderPaths: ['*'] }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\calculatePrice.js',
        options: [{ folderPaths: ['*'] }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\index.config.js',
        options: [{ folderPaths: ['*'] }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'index.config.js',
        options: [{ folderPaths: ['*'] }],
      },
    ],
    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\index.jsx',
        options: [{ folderPaths: ['*'] }],
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
        filename: 'src\\utils\\index.js',
        options: [{ folderPaths: ['*'] }],
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
        filename: 'index.js',
        options: [{ folderPaths: ['*'] }],
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

ruleTester.run('no-index with option on Windows: [{ folderPaths: [] }]', rule, {
  valid: [
    {
      code: "var foo = 'bar';",
      filename: 'src\\components\\login.jsx',
      options: [{ folderPaths: [] }],
    },
    {
      code: "var foo = 'bar';",
      filename: 'src\\utils\\calculatePrice.js',
      options: [{ folderPaths: [] }],
    },
    {
      code: "var foo = 'bar';",
      filename: 'src\\utils\\index.config.js',
      options: [{ folderPaths: [] }],
    },
    {
      code: "var foo = 'bar';",
      filename: 'index.config.js',
      options: [{ folderPaths: [] }],
    },
  ],
  invalid: [
    {
      code: "var foo = 'bar';",
      filename: 'src\\components\\index.jsx',
      options: [{ folderPaths: [] }],
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
      filename: 'src\\utils\\index.js',
      options: [{ folderPaths: [] }],
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
      filename: 'index.js',
      options: [{ folderPaths: [] }],
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
  "no-index with one of the paths containing a wrong glob pattern on Windows: [{ folderPaths: ['src/components/**', false]}]",
  rule,
  {
    valid: [],
    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\index.jsx',
        options: [{ folderPaths: ['src/components/**', false] }],
        errors: [
          {
            message: 'The filename "index" is not allowed',
            column: 1,
            line: 1,
          },
          {
            message:
              'There is an invalid pattern "false", please double-check it and try again',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "no-index with option on Windows: [{ folderPaths: ['src/components/**'] }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\login.jsx',
        options: [{ folderPaths: ['src/components/**'] }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\calculatePrice.js',
        options: [{ folderPaths: ['src/components/**'] }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\index.config.js',
        options: [{ folderPaths: ['src/components/**'] }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'index.config.ts',
        options: [{ folderPaths: ['src/components/**'] }],
      },
    ],
    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\Breadcrumb\\index.tsx',
        options: [{ folderPaths: ['src/components/**'] }],
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
        filename: 'src\\components\\index.jsx',
        options: [{ folderPaths: ['src/components/**'] }],
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

ruleTester.run(
  "no-index with option on Windows: [{ folderPaths: ['src/components/**'], ignoreMiddleExtensions: true }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\index.config.js',
        options: [
          {
            folderPaths: ['src/components/**'],
            ignoreMiddleExtensions: true,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'index.config.ts',
        options: [
          {
            folderPaths: ['src/components/**'],
            ignoreMiddleExtensions: true,
          },
        ],
      },
    ],
    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\index.config.js',
        options: [
          {
            folderPaths: ['src/components/**'],
            ignoreMiddleExtensions: true,
          },
        ],
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
        filename: 'src\\components\\config\\index.config.js',
        options: [
          {
            folderPaths: ['src/components/**'],
            ignoreMiddleExtensions: true,
          },
        ],
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

ruleTester.run(
  "no-index with many options on Windows: [{ folderPaths: ['src/components/**', 'src/utils/*', '**/[[]*'] }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\Breadcrumb\\Breadcrumb.tsx',
        options: [
          {
            folderPaths: [
              '**/server/**',
              'src/components/**',
              'src/utils/*',
              '**/[[]*/',
            ],
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'shared\\components\\index.js',
        options: [
          {
            folderPaths: [
              '**/server/**',
              'src/components/**',
              'src/utils/*',
              '**/[[]*/',
            ],
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\isValidEmail.ts',
        options: [
          {
            folderPaths: [
              '**/server/**',
              'src/components/**',
              'src/utils/*',
              '**/[[]*/',
            ],
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\validators\\index.ts',
        options: [
          {
            folderPaths: [
              '**/server/**',
              'src/components/**',
              'src/utils/*',
              '**/[[]*/',
            ],
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\index.config.js',
        options: [
          {
            folderPaths: [
              '**/server/**',
              'src/components/**',
              'src/utils/*',
              '**/[[]*/',
            ],
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'index.ts',
        options: [
          {
            folderPaths: [
              '**/server/**',
              'src/components/**',
              'src/utils/*',
              '**/[[]*/',
            ],
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\pages\\dashboard\\[pageId]\\Page.tsx',
        options: [
          {
            folderPaths: [
              '**/server/**',
              'src/components/**',
              'src/utils/*',
              '**/[[]*/',
            ],
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'app\\server\\middleware.ts',
        options: [
          {
            folderPaths: [
              '**/server/**',
              'src/components/**',
              'src/utils/*',
              '**/[[]*/',
            ],
          },
        ],
      },
    ],
    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\Breadcrumb\\index.tsx',
        options: [
          {
            folderPaths: [
              '**/server/**',
              'src/components/**',
              'src/utils/*',
              '**/[[]*/',
            ],
          },
        ],
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
        filename: 'src\\utils\\dates\\index.ts',
        options: [
          {
            folderPaths: [
              '**/server/**',
              'src/components/**',
              'src/utils/*',
              '**/[[]*/',
            ],
          },
        ],
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
        filename: 'src\\pages\\dashboard\\[pageId]\\index.tsx',
        options: [
          {
            folderPaths: [
              '**/server/**',
              'src/components/**',
              'src/utils/*',
              '**/[[]*/',
            ],
          },
        ],
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
        filename: 'app\\server\\db\\index.ts',
        options: [
          {
            folderPaths: [
              '**/server/**',
              'src/components/**',
              'src/utils/*',
              '**/[[]*/',
            ],
          },
        ],
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
