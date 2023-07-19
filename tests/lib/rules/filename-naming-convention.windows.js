/**
 * @file The filename should follow the filename naming convention
 * @author Huan Luo
 */

import { RuleTester } from 'eslint';
import esmock from 'esmock';
import { win32 } from 'path';

const rule = await esmock(
  '../../../lib/rules/filename-naming-convention.js',
  {},
  {
    path: win32,
  }
);
const ruleTester = new RuleTester();

ruleTester.run(
  "filename-naming-convention with option on Windows: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\components\\login.jsx',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\login.jsx',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\login.jsx',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'login.jsx',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\calculatePrice.js',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\calculatePrice.js',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'calculatePrice.js',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\classes\\g2tClass.js',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\CalculatePrice.js',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The filename "CalculatePrice.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\utils\\calculate_price.js',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The filename "calculate_price.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option on Windows: [{ '**/*.js': 'PASCAL_CASE', '**/*.jsx': 'PASCAL_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\components\\Login.jsx',
        options: [{ '**/*.js': 'PASCAL_CASE', '**/*.jsx': 'PASCAL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\Login.jsx',
        options: [{ '**/*.js': 'PASCAL_CASE', '**/*.jsx': 'PASCAL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\CalculatePrice.js',
        options: [{ '**/*.js': 'PASCAL_CASE', '**/*.jsx': 'PASCAL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\Calculate2Price.js',
        options: [{ '**/*.js': 'PASCAL_CASE', '**/*.jsx': 'PASCAL_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\calculatePrice.js',
        options: [{ '**/*.js': 'PASCAL_CASE', '**/*.jsx': 'PASCAL_CASE' }],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "PASCAL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\utils\\calculatePrice.js',
        options: [{ '**/*.js': 'PASCAL_CASE', '**/*.jsx': 'PASCAL_CASE' }],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "PASCAL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option on Windows: [{ '**/*.js': 'SNAKE_CASE', '**/*.jsx': 'SNAKE_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\components\\login.jsx',
        options: [{ '**/*.js': 'SNAKE_CASE', '**/*.jsx': 'SNAKE_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\login.jsx',
        options: [{ '**/*.js': 'SNAKE_CASE', '**/*.jsx': 'SNAKE_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\calculate_price.js',
        options: [{ '**/*.js': 'SNAKE_CASE', '**/*.jsx': 'SNAKE_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\i18n_test.js',
        options: [{ '**/*.js': 'SNAKE_CASE', '**/*.jsx': 'SNAKE_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\utils\\calculatePrice.js',
        options: [{ '**/*.js': 'SNAKE_CASE', '**/*.jsx': 'SNAKE_CASE' }],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "SNAKE_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\calculatePrice.js',
        options: [{ '**/*.js': 'SNAKE_CASE', '**/*.jsx': 'SNAKE_CASE' }],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "SNAKE_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option on Windows: [{ '**/*.js': 'KEBAB_CASE', '**/*.jsx': 'KEBAB_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\login.jsx',
        options: [{ '**/*.js': 'KEBAB_CASE', '**/*.jsx': 'KEBAB_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\components\\login.jsx',
        options: [{ '**/*.js': 'KEBAB_CASE', '**/*.jsx': 'KEBAB_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\calculate-price.js',
        options: [{ '**/*.js': 'KEBAB_CASE', '**/*.jsx': 'KEBAB_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\i18n-test.js',
        options: [{ '**/*.js': 'KEBAB_CASE', '**/*.jsx': 'KEBAB_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\utils\\calculatePrice.js',
        options: [{ '**/*.js': 'KEBAB_CASE', '**/*.jsx': 'KEBAB_CASE' }],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "KEBAB_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\calculatePrice.js',
        options: [{ '**/*.js': 'KEBAB_CASE', '**/*.jsx': 'KEBAB_CASE' }],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "KEBAB_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option on Windows: [{ '**/*.js': 'SCREAMING_SNAKE_CASE', '**/*.jsx': 'SCREAMING_SNAKE_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\components\\LOGIN.jsx',
        options: [
          {
            '**/*.js': 'SCREAMING_SNAKE_CASE',
            '**/*.jsx': 'SCREAMING_SNAKE_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\LOGIN.jsx',
        options: [
          {
            '**/*.js': 'SCREAMING_SNAKE_CASE',
            '**/*.jsx': 'SCREAMING_SNAKE_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\CALCULATE_PRICE.js',
        options: [
          {
            '**/*.js': 'SCREAMING_SNAKE_CASE',
            '**/*.jsx': 'SCREAMING_SNAKE_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\CALCULATE100_PRICE.js',
        options: [
          {
            '**/*.js': 'SCREAMING_SNAKE_CASE',
            '**/*.jsx': 'SCREAMING_SNAKE_CASE',
          },
        ],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\utils\\calculatePrice.js',
        options: [
          {
            '**/*.js': 'SCREAMING_SNAKE_CASE',
            '**/*.jsx': 'SCREAMING_SNAKE_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "SCREAMING_SNAKE_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\calculatePrice.js',
        options: [
          {
            '**/*.js': 'SCREAMING_SNAKE_CASE',
            '**/*.jsx': 'SCREAMING_SNAKE_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "SCREAMING_SNAKE_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option on Windows: [{ '**/*.js': 'FLAT_CASE', '**/*.jsx': 'FLAT_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\components\\login.jsx',
        options: [{ '**/*.js': 'FLAT_CASE', '**/*.jsx': 'FLAT_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\login.jsx',
        options: [{ '**/*.js': 'FLAT_CASE', '**/*.jsx': 'FLAT_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\calculateprice.js',
        options: [{ '**/*.js': 'FLAT_CASE', '**/*.jsx': 'FLAT_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\calculatePrice.js',
        options: [{ '**/*.js': 'FLAT_CASE', '**/*.jsx': 'FLAT_CASE' }],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "FLAT_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\utils\\calculatePrice.js',
        options: [{ '**/*.js': 'FLAT_CASE', '**/*.jsx': 'FLAT_CASE' }],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "FLAT_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option on Windows: [{ '**/*.js': '__+([a-z])', '**/*.jsx': '__+([a-z])' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\components\\__login.jsx',
        options: [{ '**/*.js': '__+([a-z])', '**/*.jsx': '__+([a-z])' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\__login.jsx',
        options: [{ '**/*.js': '__+([a-z])', '**/*.jsx': '__+([a-z])' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\__calculateprice.js',
        options: [{ '**/*.js': '__+([a-z])', '**/*.jsx': '__+([a-z])' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\utils\\calculatePrice.js',
        options: [{ '**/*.js': '__+([a-z])', '**/*.jsx': '__+([a-z])' }],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "__+([a-z])" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\calculatePrice.js',
        options: [{ '**/*.js': '__+([a-z])', '**/*.jsx': '__+([a-z])' }],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "__+([a-z])" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  'filename-naming-convention with fex that has not been set on Windows',
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\utils\\CalculatePrice.ts',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\CalculatePrice.ts',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
    ],

    invalid: [],
  }
);

ruleTester.run(
  "filename-naming-convention with option on Windows: [{ '**/*.js': 'FOO', '.jsx': 'FLAT_CASE' }]",
  rule,
  {
    valid: [],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\utils\\calculatePrice.js',
        options: [{ '**/*.js': 'FOO', '.jsx': 'FLAT_CASE' }],
        errors: [
          {
            message:
              'There is an invalid pattern "FOO", please double-check it and try again',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\calculatePrice.js',
        options: [{ '**/*.js': 'FOO', '.jsx': 'FLAT_CASE' }],
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
  "filename-naming-convention with option on Windows: [{ '**/*.js': 'CAMEL_CASE', '.jsx': 'FLAT_CASE' }]",
  rule,
  {
    valid: [],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename:
          'C:\\Users\\Administrator\\Downloads\\wai\\src\\utils\\calculatePrice.js',
        options: [{ '**/*.js': 'CAMEL_CASE', '.jsx': 'FLAT_CASE' }],
        errors: [
          {
            message:
              'There is an invalid pattern ".jsx", please double-check it and try again',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\calculatePrice.js',
        options: [{ '**/*.js': 'CAMEL_CASE', '.jsx': 'FLAT_CASE' }],
        errors: [
          {
            message:
              'There is an invalid pattern ".jsx", please double-check it and try again',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option on Windows: [{ '**/*.js': 'NEXT_JS_APP_ROUTER_CASE' }]",
  rule,
  {
    valid: [],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\calculatePrice.js',
        options: [{ '**/*.js': 'NEXT_JS_APP_ROUTER_CASE' }],
        errors: [
          {
            message:
              'There is an invalid pattern "NEXT_JS_APP_ROUTER_CASE", please double-check it and try again',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option on Windows: [{ 'src/services/*.js': 'PASCAL_CASE', 'src/composables/*.js': 'CAMEL_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\services\\DownloadService.js',
        options: [
          {
            'src/services/*.js': 'PASCAL_CASE',
            'src/composables/*.js': 'CAMEL_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\composables\\useDownloadApi.js',
        options: [
          {
            'src/services/*.js': 'PASCAL_CASE',
            'src/composables/*.js': 'CAMEL_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\CalculatePrice.ts',
        options: [
          {
            'src/services/*.js': 'PASCAL_CASE',
            'src/composables/*.js': 'CAMEL_CASE',
          },
        ],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\services\\downloadService.js',
        options: [
          {
            'src/services/*.js': 'PASCAL_CASE',
            'src/composables/*.js': 'CAMEL_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "downloadService.js" does not match the "PASCAL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\composables\\UseDownloadApi.js',
        options: [
          {
            'src/services/*.js': 'PASCAL_CASE',
            'src/composables/*.js': 'CAMEL_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "UseDownloadApi.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option on Windows: [{ '**/*.js': 'CAMEL_CASE' }, { ignoreMiddleExtensions: true }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\date.js',
        options: [
          { '**/*.js': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: true },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\date.test.js',
        options: [
          { '**/*.js': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: true },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\date.spec.js',
        options: [
          { '**/*.js': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: true },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\date.spec.test.js',
        options: [
          { '**/*.js': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: true },
        ],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\Date.js',
        options: [
          { '**/*.js': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: true },
        ],
        errors: [
          {
            message:
              'The filename "Date.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\Date.test.js',
        options: [
          { '**/*.js': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: true },
        ],
        errors: [
          {
            message:
              'The filename "Date.test.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\Date.spec.js',
        options: [
          { '**/*.js': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: true },
        ],
        errors: [
          {
            message:
              'The filename "Date.spec.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\date_util.spec.js',
        options: [
          { '**/*.js': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: true },
        ],
        errors: [
          {
            message:
              'The filename "date_util.spec.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\date_util.spec.test.js',
        options: [
          { '**/*.js': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: true },
        ],
        errors: [
          {
            message:
              'The filename "date_util.spec.test.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option on Windows: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }, { ignoreMiddleExtensions: false }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\login.jsx',
        options: [
          { '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: false },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\calculatePrice.js',
        options: [
          { '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: false },
        ],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\CalculatePrice.js',
        options: [
          { '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: false },
        ],
        errors: [
          {
            message:
              'The filename "CalculatePrice.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\utils\\date.test.js',
        options: [
          { '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: false },
        ],
        errors: [
          {
            message:
              'The filename "date.test.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option: [{ '**/*/!(index).*': '<1>' }, { ignoreMiddleExtensions: true }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\featureA\\index.js',
        options: [
          { '**/*/!(index).*': '<1>' },
          { ignoreMiddleExtensions: true },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\featureA\\featureA.jsx',
        options: [
          { '**/*/!(index).*': '<1>' },
          { ignoreMiddleExtensions: true },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\featureA\\featureA.specs.js',
        options: [
          { '**/*/!(index).*': '<1>' },
          { ignoreMiddleExtensions: true },
        ],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\featureA\\featureB.jsx',
        options: [
          { '**/*/!(index).*': '<1>' },
          { ignoreMiddleExtensions: true },
        ],
        errors: [
          {
            message:
              'The filename "featureB.jsx" does not match the "<1>" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\featureA\\featureB.specs.js',
        options: [
          { '**/*/!(index).*': '<1>' },
          { ignoreMiddleExtensions: true },
        ],
        errors: [
          {
            message:
              'The filename "featureB.specs.js" does not match the "<1>" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option: [{ '**/*/!(index).*': '<9>' }]",
  rule,
  {
    valid: [],
    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src\\components\\featureA\\featureA.jsx',
        options: [{ '**/*/!(index).*': '<9>' }],
        errors: [
          {
            message:
              'The prefined match "<9>" is not found in the pattern "**/*/!(index).*", please double-check it and try again',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run('filename-naming-convention with option: []', rule, {
  valid: [],
  invalid: [
    {
      code: "var foo = 'bar';",
      filename: 'src\\components\\featureA\\featureA.jsx',
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
