/**
 * @fileoverview The filename should follow the filename naming convention
 * @author Duke Luo
 */
'use strict';

const rule = require('../../../lib/rules/filename-naming-convention'),
  RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester();

ruleTester.run(
  "filename-naming-convention with option: [{ '*.js': 'CAMEL_CASE', '*.jsx': 'CAMEL_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/login.jsx',
        options: [{ '*.js': 'CAMEL_CASE', '*.jsx': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
        options: [{ '*.js': 'CAMEL_CASE', '*.jsx': 'CAMEL_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CalculatePrice.js',
        options: [{ '*.js': 'CAMEL_CASE', '*.jsx': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The filename "CalculatePrice.js" does not match the "CAMEL_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate_price.js',
        options: [{ '*.js': 'CAMEL_CASE', '*.jsx': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The filename "calculate_price.js" does not match the "CAMEL_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate-price.js',
        options: [{ '*.js': 'CAMEL_CASE', '*.jsx': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The filename "calculate-price.js" does not match the "CAMEL_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CALCULATE_PRICE.js',
        options: [{ '*.js': 'CAMEL_CASE', '*.jsx': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The filename "CALCULATE_PRICE.js" does not match the "CAMEL_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option: [{ '*.js': 'PASCAL_CASE', '*.jsx': 'PASCAL_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/Login.jsx',
        options: [{ '*.js': 'PASCAL_CASE', '*.jsx': 'PASCAL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CalculatePrice.js',
        options: [{ '*.js': 'PASCAL_CASE', '*.jsx': 'PASCAL_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
        options: [{ '*.js': 'PASCAL_CASE', '*.jsx': 'PASCAL_CASE' }],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "PASCAL_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate_price.js',
        options: [{ '*.js': 'PASCAL_CASE', '*.jsx': 'PASCAL_CASE' }],
        errors: [
          {
            message:
              'The filename "calculate_price.js" does not match the "PASCAL_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate-price.js',
        options: [{ '*.js': 'PASCAL_CASE', '*.jsx': 'PASCAL_CASE' }],
        errors: [
          {
            message:
              'The filename "calculate-price.js" does not match the "PASCAL_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CALCULATE_PRICE.js',
        options: [{ '*.js': 'PASCAL_CASE', '*.jsx': 'PASCAL_CASE' }],
        errors: [
          {
            message:
              'The filename "CALCULATE_PRICE.js" does not match the "PASCAL_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculateprice.js',
        options: [{ '*.js': 'PASCAL_CASE', '*.jsx': 'PASCAL_CASE' }],
        errors: [
          {
            message:
              'The filename "calculateprice.js" does not match the "PASCAL_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option: [{ '*.js': 'SNAKE_CASE', '*.jsx': 'SNAKE_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/login.jsx',
        options: [{ '*.js': 'SNAKE_CASE', '*.jsx': 'SNAKE_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate_price.js',
        options: [{ '*.js': 'SNAKE_CASE', '*.jsx': 'SNAKE_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
        options: [{ '*.js': 'SNAKE_CASE', '*.jsx': 'SNAKE_CASE' }],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "SNAKE_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CalculatePrice.js',
        options: [{ '*.js': 'SNAKE_CASE', '*.jsx': 'SNAKE_CASE' }],
        errors: [
          {
            message:
              'The filename "CalculatePrice.js" does not match the "SNAKE_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate-price.js',
        options: [{ '*.js': 'SNAKE_CASE', '*.jsx': 'SNAKE_CASE' }],
        errors: [
          {
            message:
              'The filename "calculate-price.js" does not match the "SNAKE_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CALCULATE_PRICE.js',
        options: [{ '*.js': 'SNAKE_CASE', '*.jsx': 'SNAKE_CASE' }],
        errors: [
          {
            message:
              'The filename "CALCULATE_PRICE.js" does not match the "SNAKE_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option: [{ '*.js': 'KEBAB_CASE', '*.jsx': 'KEBAB_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/login.jsx',
        options: [{ '*.js': 'KEBAB_CASE', '*.jsx': 'KEBAB_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate-price.js',
        options: [{ '*.js': 'KEBAB_CASE', '*.jsx': 'KEBAB_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
        options: [{ '*.js': 'KEBAB_CASE', '*.jsx': 'KEBAB_CASE' }],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "KEBAB_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CalculatePrice.js',
        options: [{ '*.js': 'KEBAB_CASE', '*.jsx': 'KEBAB_CASE' }],
        errors: [
          {
            message:
              'The filename "CalculatePrice.js" does not match the "KEBAB_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate_price.js',
        options: [{ '*.js': 'KEBAB_CASE', '*.jsx': 'KEBAB_CASE' }],
        errors: [
          {
            message:
              'The filename "calculate_price.js" does not match the "KEBAB_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CALCULATE_PRICE.js',
        options: [{ '*.js': 'KEBAB_CASE', '*.jsx': 'KEBAB_CASE' }],
        errors: [
          {
            message:
              'The filename "CALCULATE_PRICE.js" does not match the "KEBAB_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option: [{ '*.js': 'SCREAMING_SNAKE_CASE', '*.jsx': 'SCREAMING_SNAKE_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/LOGIN.jsx',
        options: [
          { '*.js': 'SCREAMING_SNAKE_CASE', '*.jsx': 'SCREAMING_SNAKE_CASE' },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CALCULATE_PRICE.js',
        options: [
          { '*.js': 'SCREAMING_SNAKE_CASE', '*.jsx': 'SCREAMING_SNAKE_CASE' },
        ],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
        options: [
          { '*.js': 'SCREAMING_SNAKE_CASE', '*.jsx': 'SCREAMING_SNAKE_CASE' },
        ],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "SCREAMING_SNAKE_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CalculatePrice.js',
        options: [
          { '*.js': 'SCREAMING_SNAKE_CASE', '*.jsx': 'SCREAMING_SNAKE_CASE' },
        ],
        errors: [
          {
            message:
              'The filename "CalculatePrice.js" does not match the "SCREAMING_SNAKE_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate_price.js',
        options: [
          { '*.js': 'SCREAMING_SNAKE_CASE', '*.jsx': 'SCREAMING_SNAKE_CASE' },
        ],
        errors: [
          {
            message:
              'The filename "calculate_price.js" does not match the "SCREAMING_SNAKE_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate-price.js',
        options: [
          { '*.js': 'SCREAMING_SNAKE_CASE', '*.jsx': 'SCREAMING_SNAKE_CASE' },
        ],
        errors: [
          {
            message:
              'The filename "calculate-price.js" does not match the "SCREAMING_SNAKE_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculateprice.js',
        options: [
          { '*.js': 'SCREAMING_SNAKE_CASE', '*.jsx': 'SCREAMING_SNAKE_CASE' },
        ],
        errors: [
          {
            message:
              'The filename "calculateprice.js" does not match the "SCREAMING_SNAKE_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-naming-convention with option: [{ '*.js': 'FLAT_CASE', '*.jsx': 'FLAT_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/login.jsx',
        options: [{ '*.js': 'FLAT_CASE', '*.jsx': 'FLAT_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculateprice.js',
        options: [{ '*.js': 'FLAT_CASE', '*.jsx': 'FLAT_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
        options: [{ '*.js': 'FLAT_CASE', '*.jsx': 'FLAT_CASE' }],
        errors: [
          {
            message:
              'The filename "calculatePrice.js" does not match the "FLAT_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CalculatePrice.js',
        options: [{ '*.js': 'FLAT_CASE', '*.jsx': 'FLAT_CASE' }],
        errors: [
          {
            message:
              'The filename "CalculatePrice.js" does not match the "FLAT_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate_price.js',
        options: [{ '*.js': 'FLAT_CASE', '*.jsx': 'FLAT_CASE' }],
        errors: [
          {
            message:
              'The filename "calculate_price.js" does not match the "FLAT_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculate-price.js',
        options: [{ '*.js': 'FLAT_CASE', '*.jsx': 'FLAT_CASE' }],
        errors: [
          {
            message:
              'The filename "calculate-price.js" does not match the "FLAT_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/CALCULATE_PRICE.js',
        options: [{ '*.js': 'FLAT_CASE', '*.jsx': 'FLAT_CASE' }],
        errors: [
          {
            message:
              'The filename "CALCULATE_PRICE.js" does not match the "FLAT_CASE" style',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);