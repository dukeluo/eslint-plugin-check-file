/**
 * @file The filename should follow the filename naming convention
 * @author Huan Luo
 */

import { RuleTester } from 'eslint';
import esmock from 'esmock';
import { posix } from 'path';

const rule = await esmock(
  '../../../lib/rules/filename-naming-convention.js',
  {},
  {
    path: posix,
  }
);
const ruleTester = new RuleTester();

ruleTester.run(
  "filename-naming-convention with option: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/login.jsx',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/login.jsx',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'login.jsx',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/calculatePrice.js',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'calculatePrice.js',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/classes/g2tClass.js',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CalculatePrice.js',
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
        filename: 'src/utils/calculate_price.js',
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
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate-price.js',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The filename "calculate-price.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CALCULATE_PRICE.js',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The filename "CALCULATE_PRICE.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/classes/2gtClass.js',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The filename "2gtClass.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option: [{ '**/*.js': 'PASCAL_CASE', '**/*.jsx': 'PASCAL_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/Login.jsx',
        options: [{ '**/*.js': 'PASCAL_CASE', '**/*.jsx': 'PASCAL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CalculatePrice.js',
        options: [{ '**/*.js': 'PASCAL_CASE', '**/*.jsx': 'PASCAL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/Calculate2Price.js',
        options: [{ '**/*.js': 'PASCAL_CASE', '**/*.jsx': 'PASCAL_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
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
        filename: 'src/utils/calculate_price.js',
        options: [{ '**/*.js': 'PASCAL_CASE', '**/*.jsx': 'PASCAL_CASE' }],
        errors: [
          {
            message:
              'The filename "calculate_price.js" does not match the "PASCAL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate-price.js',
        options: [{ '**/*.js': 'PASCAL_CASE', '**/*.jsx': 'PASCAL_CASE' }],
        errors: [
          {
            message:
              'The filename "calculate-price.js" does not match the "PASCAL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CALCULATE_PRICE.js',
        options: [{ '**/*.js': 'PASCAL_CASE', '**/*.jsx': 'PASCAL_CASE' }],
        errors: [
          {
            message:
              'The filename "CALCULATE_PRICE.js" does not match the "PASCAL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculateprice.js',
        options: [{ '**/*.js': 'PASCAL_CASE', '**/*.jsx': 'PASCAL_CASE' }],
        errors: [
          {
            message:
              'The filename "calculateprice.js" does not match the "PASCAL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/2CalculatePrice.js',
        options: [{ '**/*.js': 'PASCAL_CASE', '**/*.jsx': 'PASCAL_CASE' }],
        errors: [
          {
            message:
              'The filename "2CalculatePrice.js" does not match the "PASCAL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option: [{ '**/*.js': 'SNAKE_CASE', '**/*.jsx': 'SNAKE_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/login.jsx',
        options: [{ '**/*.js': 'SNAKE_CASE', '**/*.jsx': 'SNAKE_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate_price.js',
        options: [{ '**/*.js': 'SNAKE_CASE', '**/*.jsx': 'SNAKE_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/i18n_test.js',
        options: [{ '**/*.js': 'SNAKE_CASE', '**/*.jsx': 'SNAKE_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
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
        filename: 'src/utils/CalculatePrice.js',
        options: [{ '**/*.js': 'SNAKE_CASE', '**/*.jsx': 'SNAKE_CASE' }],
        errors: [
          {
            message:
              'The filename "CalculatePrice.js" does not match the "SNAKE_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate-price.js',
        options: [{ '**/*.js': 'SNAKE_CASE', '**/*.jsx': 'SNAKE_CASE' }],
        errors: [
          {
            message:
              'The filename "calculate-price.js" does not match the "SNAKE_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CALCULATE_PRICE.js',
        options: [{ '**/*.js': 'SNAKE_CASE', '**/*.jsx': 'SNAKE_CASE' }],
        errors: [
          {
            message:
              'The filename "CALCULATE_PRICE.js" does not match the "SNAKE_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/18_test.js',
        options: [{ '**/*.js': 'SNAKE_CASE', '**/*.jsx': 'SNAKE_CASE' }],
        errors: [
          {
            message:
              'The filename "18_test.js" does not match the "SNAKE_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option: [{ '**/*.js': 'KEBAB_CASE', '**/*.jsx': 'KEBAB_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/login.jsx',
        options: [{ '**/*.js': 'KEBAB_CASE', '**/*.jsx': 'KEBAB_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate-price.js',
        options: [{ '**/*.js': 'KEBAB_CASE', '**/*.jsx': 'KEBAB_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/i18n-test.js',
        options: [{ '**/*.js': 'KEBAB_CASE', '**/*.jsx': 'KEBAB_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
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
        filename: 'src/utils/CalculatePrice.js',
        options: [{ '**/*.js': 'KEBAB_CASE', '**/*.jsx': 'KEBAB_CASE' }],
        errors: [
          {
            message:
              'The filename "CalculatePrice.js" does not match the "KEBAB_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate_price.js',
        options: [{ '**/*.js': 'KEBAB_CASE', '**/*.jsx': 'KEBAB_CASE' }],
        errors: [
          {
            message:
              'The filename "calculate_price.js" does not match the "KEBAB_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CALCULATE_PRICE.js',
        options: [{ '**/*.js': 'KEBAB_CASE', '**/*.jsx': 'KEBAB_CASE' }],
        errors: [
          {
            message:
              'The filename "CALCULATE_PRICE.js" does not match the "KEBAB_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/18n-test.js',
        options: [{ '**/*.js': 'KEBAB_CASE', '**/*.jsx': 'KEBAB_CASE' }],
        errors: [
          {
            message:
              'The filename "18n-test.js" does not match the "KEBAB_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option: [{ '**/*.js': 'SCREAMING_SNAKE_CASE', '**/*.jsx': 'SCREAMING_SNAKE_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/LOGIN.jsx',
        options: [
          {
            '**/*.js': 'SCREAMING_SNAKE_CASE',
            '**/*.jsx': 'SCREAMING_SNAKE_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CALCULATE_PRICE.js',
        options: [
          {
            '**/*.js': 'SCREAMING_SNAKE_CASE',
            '**/*.jsx': 'SCREAMING_SNAKE_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CALCULATE100_PRICE.js',
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
        filename: 'src/utils/calculatePrice.js',
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
        filename: 'src/utils/CalculatePrice.js',
        options: [
          {
            '**/*.js': 'SCREAMING_SNAKE_CASE',
            '**/*.jsx': 'SCREAMING_SNAKE_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "CalculatePrice.js" does not match the "SCREAMING_SNAKE_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate_price.js',
        options: [
          {
            '**/*.js': 'SCREAMING_SNAKE_CASE',
            '**/*.jsx': 'SCREAMING_SNAKE_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "calculate_price.js" does not match the "SCREAMING_SNAKE_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate-price.js',
        options: [
          {
            '**/*.js': 'SCREAMING_SNAKE_CASE',
            '**/*.jsx': 'SCREAMING_SNAKE_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "calculate-price.js" does not match the "SCREAMING_SNAKE_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculateprice.js',
        options: [
          {
            '**/*.js': 'SCREAMING_SNAKE_CASE',
            '**/*.jsx': 'SCREAMING_SNAKE_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "calculateprice.js" does not match the "SCREAMING_SNAKE_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/100CALCULATE_PRICE.js',
        options: [
          {
            '**/*.js': 'SCREAMING_SNAKE_CASE',
            '**/*.jsx': 'SCREAMING_SNAKE_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "100CALCULATE_PRICE.js" does not match the "SCREAMING_SNAKE_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option: [{ '**/*.js': 'FLAT_CASE', '**/*.jsx': 'FLAT_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/login.jsx',
        options: [{ '**/*.js': 'FLAT_CASE', '**/*.jsx': 'FLAT_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculateprice.js',
        options: [{ '**/*.js': 'FLAT_CASE', '**/*.jsx': 'FLAT_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
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
        filename: 'src/utils/CalculatePrice.js',
        options: [{ '**/*.js': 'FLAT_CASE', '**/*.jsx': 'FLAT_CASE' }],
        errors: [
          {
            message:
              'The filename "CalculatePrice.js" does not match the "FLAT_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate_price.js',
        options: [{ '**/*.js': 'FLAT_CASE', '**/*.jsx': 'FLAT_CASE' }],
        errors: [
          {
            message:
              'The filename "calculate_price.js" does not match the "FLAT_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate-price.js',
        options: [{ '**/*.js': 'FLAT_CASE', '**/*.jsx': 'FLAT_CASE' }],
        errors: [
          {
            message:
              'The filename "calculate-price.js" does not match the "FLAT_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CALCULATE_PRICE.js',
        options: [{ '**/*.js': 'FLAT_CASE', '**/*.jsx': 'FLAT_CASE' }],
        errors: [
          {
            message:
              'The filename "CALCULATE_PRICE.js" does not match the "FLAT_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option: [{ '**/*.js': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE', '**/*.jsx': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/_app.js',
        options: [
          {
            '**/*.js': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
            '**/*.jsx': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/_document.js',
        options: [
          {
            '**/*.js': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
            '**/*.jsx': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/_error.js',
        options: [
          {
            '**/*.js': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
            '**/*.jsx': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/404.js',
        options: [
          {
            '**/*.js': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
            '**/*.jsx': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/500.js',
        options: [
          {
            '**/*.js': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
            '**/*.jsx': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/blog/index.js',
        options: [
          {
            '**/*.js': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
            '**/*.jsx': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/services/getBlogPosts.js',
        options: [
          {
            '**/*.js': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
            '**/*.jsx': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/blog/[post].js',
        options: [
          {
            '**/*.js': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
            '**/*.jsx': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/blog/[blogPost].js',
        options: [
          {
            '**/*.js': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
            '**/*.jsx': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/blog/[[...slug]].js',
        options: [
          {
            '**/*.js': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
            '**/*.jsx': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/blog/[...params].js',
        options: [
          {
            '**/*.js': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
            '**/*.jsx': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/blog/[category]/[post].js',
        options: [
          {
            '**/*.js': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
            '**/*.jsx': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
          },
        ],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CALCULATE_PRICE.js',
        options: [
          {
            '**/*.js': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
            '**/*.jsx': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "CALCULATE_PRICE.js" does not match the "NEXT_JS_PAGE_ROUTER_FILENAME_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with Next.js dynamic routes and option: [{ '**/*.{js,jsx,ts,tsx}': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE' }, { ignoreMiddleExtensions: true }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/blog/[[...userId]].tsx',
        options: [
          { '**/*.{js,jsx,ts,tsx}': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE' },
          { ignoreMiddleExtensions: true },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/blog/[[...slug]].tsx',
        options: [
          { '**/*.{js,jsx,ts,tsx}': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE' },
          { ignoreMiddleExtensions: true },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/blog/[...params].tsx',
        options: [
          { '**/*.{js,jsx,ts,tsx}': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE' },
          { ignoreMiddleExtensions: true },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/blog/params',
        options: [
          { '**/*.{js,jsx,ts,tsx}': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE' },
          { ignoreMiddleExtensions: true },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/user/[id].tsx',
        options: [
          { '**/*.{js,jsx,ts,tsx}': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE' },
          { ignoreMiddleExtensions: true },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/post/[postId].test.tsx',
        options: [
          { '**/*.{js,jsx,ts,tsx}': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE' },
          { ignoreMiddleExtensions: true },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/api/user.test.ts',
        options: [
          { '**/*.{js,jsx,ts,tsx}': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE' },
          { ignoreMiddleExtensions: true },
        ],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/blog/Invalid_Name.tsx',
        options: [
          { '**/*.{js,jsx,ts,tsx}': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE' },
          { ignoreMiddleExtensions: true },
        ],
        errors: [
          {
            message:
              'The filename "Invalid_Name.tsx" does not match the "NEXT_JS_PAGE_ROUTER_FILENAME_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option: [{ '**/*.js': '__+([a-z])', '**/*.jsx': '__+([a-z])' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/__login.jsx',
        options: [{ '**/*.js': '__+([a-z])', '**/*.jsx': '__+([a-z])' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/__calculateprice.js',
        options: [{ '**/*.js': '__+([a-z])', '**/*.jsx': '__+([a-z])' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
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
        filename: 'src/utils/CalculatePrice.js',
        options: [{ '**/*.js': '__+([a-z])', '**/*.jsx': '__+([a-z])' }],
        errors: [
          {
            message:
              'The filename "CalculatePrice.js" does not match the "__+([a-z])" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate_price.js',
        options: [{ '**/*.js': '__+([a-z])', '**/*.jsx': '__+([a-z])' }],
        errors: [
          {
            message:
              'The filename "calculate_price.js" does not match the "__+([a-z])" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate-price.js',
        options: [{ '**/*.js': '__+([a-z])', '**/*.jsx': '__+([a-z])' }],
        errors: [
          {
            message:
              'The filename "calculate-price.js" does not match the "__+([a-z])" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CALCULATE_PRICE.js',
        options: [{ '**/*.js': '__+([a-z])', '**/*.jsx': '__+([a-z])' }],
        errors: [
          {
            message:
              'The filename "CALCULATE_PRICE.js" does not match the "__+([a-z])" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  'filename-naming-convention with fex that has not been set',
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CalculatePrice.ts',
        options: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }],
      },
    ],

    invalid: [],
  }
);

ruleTester.run(
  "filename-naming-convention with option: [{ '**/*.js': 'FOO', '.jsx': 'FLAT_CASE' }]",
  rule,
  {
    valid: [],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
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
  "filename-naming-convention with option: [{ '**/*.js': 'CAMEL_CASE', '.jsx': 'FLAT_CASE' }]",
  rule,
  {
    valid: [],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
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
  "filename-naming-convention with option: [{ '**/*.js': 'NEXT_JS_APP_ROUTER_CASE' }]",
  rule,
  {
    valid: [],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
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
  "filename-naming-convention with option: [{ 'src/services/*.js': 'PASCAL_CASE', 'src/composables/*.js': 'CAMEL_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/services/DownloadService.js',
        options: [
          {
            'src/services/*.js': 'PASCAL_CASE',
            'src/composables/*.js': 'CAMEL_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/composables/useDownloadApi.js',
        options: [
          {
            'src/services/*.js': 'PASCAL_CASE',
            'src/composables/*.js': 'CAMEL_CASE',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CalculatePrice.ts',
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
        filename: 'src/services/downloadService.js',
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
        filename: 'src/services/downloadservice.js',
        options: [
          {
            'src/services/*.js': 'PASCAL_CASE',
            'src/composables/*.js': 'CAMEL_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "downloadservice.js" does not match the "PASCAL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/services/download_service.js',
        options: [
          {
            'src/services/*.js': 'PASCAL_CASE',
            'src/composables/*.js': 'CAMEL_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "download_service.js" does not match the "PASCAL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/services/download-service.js',
        options: [
          {
            'src/services/*.js': 'PASCAL_CASE',
            'src/composables/*.js': 'CAMEL_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "download-service.js" does not match the "PASCAL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/services/DOWNLOAD_SERVICE.js',
        options: [
          {
            'src/services/*.js': 'PASCAL_CASE',
            'src/composables/*.js': 'CAMEL_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "DOWNLOAD_SERVICE.js" does not match the "PASCAL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/services/downloadService.service.js',
        options: [
          {
            'src/services/*.js': 'PASCAL_CASE',
            'src/composables/*.js': 'CAMEL_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "downloadService.service.js" does not match the "PASCAL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/composables/UseDownloadApi.js',
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
      {
        code: "var foo = 'bar';",
        filename: 'src/composables/USE_DOWNLOAD_API.js',
        options: [
          {
            'src/services/*.js': 'PASCAL_CASE',
            'src/composables/*.js': 'CAMEL_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "USE_DOWNLOAD_API.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/composables/use-download-api.js',
        options: [
          {
            'src/services/*.js': 'PASCAL_CASE',
            'src/composables/*.js': 'CAMEL_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "use-download-api.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/composables/use_download_api.js',
        options: [
          {
            'src/services/*.js': 'PASCAL_CASE',
            'src/composables/*.js': 'CAMEL_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "use_download_api.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/composables/useDownloadApi.composable.js',
        options: [
          {
            'src/services/*.js': 'PASCAL_CASE',
            'src/composables/*.js': 'CAMEL_CASE',
          },
        ],
        errors: [
          {
            message:
              'The filename "useDownloadApi.composable.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option: [{ '**/*.js': 'CAMEL_CASE' }, { ignoreMiddleExtensions: true }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/date.js',
        options: [
          { '**/*.js': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: true },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/date.test.js',
        options: [
          { '**/*.js': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: true },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/date.spec.js',
        options: [
          { '**/*.js': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: true },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/date.spec.test.js',
        options: [
          { '**/*.js': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: true },
        ],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/Date.js',
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
        filename: 'src/utils/Date.test.js',
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
        filename: 'src/utils/Date.spec.js',
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
        filename: 'src/utils/date_util.spec.js',
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
        filename: 'src/utils/date_util.spec.test.js',
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
  "filename-naming-convention with option: [{ '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' }, { ignoreMiddleExtensions: false }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/login.jsx',
        options: [
          { '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: false },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
        options: [
          { '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: false },
        ],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CalculatePrice.js',
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
        filename: 'src/utils/calculate_price.js',
        options: [
          { '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: false },
        ],
        errors: [
          {
            message:
              'The filename "calculate_price.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate-price.js',
        options: [
          { '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: false },
        ],
        errors: [
          {
            message:
              'The filename "calculate-price.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CALCULATE_PRICE.js',
        options: [
          { '**/*.js': 'CAMEL_CASE', '**/*.jsx': 'CAMEL_CASE' },
          { ignoreMiddleExtensions: false },
        ],
        errors: [
          {
            message:
              'The filename "CALCULATE_PRICE.js" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/date.test.js',
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
        filename: 'src/components/featureA/index.js',
        options: [
          { '**/*/!(index).*': '<1>' },
          { ignoreMiddleExtensions: true },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/components/featureA/featureA.jsx',
        options: [
          { '**/*/!(index).*': '<1>' },
          { ignoreMiddleExtensions: true },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/components/featureA/featureA.specs.js',
        options: [
          { '**/*/!(index).*': '<1>' },
          { ignoreMiddleExtensions: true },
        ],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/featureA/featureB.jsx',
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
        filename: 'src/components/featureA/featureB.specs.js',
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
        filename: 'src/components/featureA/featureA.jsx',
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

ruleTester.run(
  "filename-naming-convention with option: [{ '**/*/!(index).*': '<1>' }, { errorMessage: 'The file \"{{ target }}\" does not match file naming convention defined(\"{{ pattern }}\") for this project, see contribute.md for details'}]",
  rule,
  {
    valid: [],
    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/featureA/featureB.jsx',
        options: [
          { '**/*/!(index).*': '<1>' },
          {
            errorMessage:
              'The file "{{ target }}" does not match file naming convention defined("{{ pattern }}") for this project, see contribute.md for details',
          },
        ],
        errors: [
          {
            message:
              'The file "featureB.jsx" does not match file naming convention defined("<1>") for this project, see contribute.md for details',
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
      filename: 'src/components/featureA/featureA.jsx',
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
