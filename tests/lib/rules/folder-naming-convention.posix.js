/**
 * @file The folder should follow the folder naming convention
 * @author Huan Luo
 */

import { RuleTester } from 'eslint';
import esmock from 'esmock';
import { posix } from 'path';

const rule = await esmock(
  '../../../lib/rules/folder-naming-convention.js',
  {},
  {
    path: posix,
  }
);
const ruleTester = new RuleTester();

ruleTester.run(
  "folder-naming-convention with option: [{ '*/__tests__/': 'PASCAL_CASE', 'src/*/': 'CAMEL_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/DisplayLabel/__tests__/displayLabel.test.js',
        options: [{ '*/__tests__/': 'PASCAL_CASE', 'src/*/': 'CAMEL_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/Components/DisplayLabel/__tests__/displayLabel.test.js',
        options: [{ '*/__tests__/': 'PASCAL_CASE', 'src/*/': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The folder "Components" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/components/displayLabel/__tests__/displayLabel.test.js',
        options: [{ '*/__tests__/': 'PASCAL_CASE', 'src/*/': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The folder "displayLabel" does not match the "PASCAL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "folder-naming-convention with option: [{ 'src/**/': 'CAMEL_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/displayLabel/displayLabel.js',
        options: [{ 'src/**/': 'CAMEL_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/Components/DisplayLabel/displayLabel.js',
        options: [{ 'src/**/': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The folder "Components" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/components/DisplayLabel/displayLabel.js',
        options: [{ 'src/**/': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The folder "DisplayLabel" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "folder-naming-convention with option: [{ 'src/!(pages)/**': 'CAMEL_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/displayLabel/displayLabel.js',
        options: [{ 'src/!(pages)/**': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/components/visual/interactiveButton/index.js',
        options: [{ 'src/!(pages)/**': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/home/index.js',
        options: [{ 'src/!(pages)/**': 'CAMEL_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/pages/Home/index.js',
        options: [{ 'src/!(pages)/**': 'CAMEL_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/Components/DisplayLabel/displayLabel.js',
        options: [{ 'src/!(pages)/**': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The folder "Components" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/components/DisplayLabel/displayLabel.js',
        options: [{ 'src/!(pages)/**': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The folder "DisplayLabel" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/components/visual/interactive-button/index.js',
        options: [{ 'src/!(pages)/**': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The folder "interactive-button" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/Pages/home/index.js',
        options: [{ 'src/!(pages)/**': 'CAMEL_CASE' }],
        errors: [
          {
            message:
              'The folder "Pages" does not match the "CAMEL_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "folder-naming-convention with option: [{ 'components/*/': '__+([a-z])' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/__displaylabel/index.js',
        options: [{ 'components/*/': '__+([a-z])' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/_displayLabel/index.js',
        options: [{ 'components/*/': '__+([a-z])' }],
        errors: [
          {
            message:
              'The folder "_displayLabel" does not match the "__+([a-z])" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/components/__displayLabel/index.js',
        options: [{ 'components/*/': '__+([a-z])' }],
        errors: [
          {
            message:
              'The folder "__displayLabel" does not match the "__+([a-z])" pattern',
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
        options: [{ '*/__tests__/': 'PASCAL_CASE', 'src/*/': 'CAMEL_CASE' }],
      },
    ],

    invalid: [],
  }
);

ruleTester.run(
  "folder-naming-convention with option: [{ '*/__tests__/': 'FOO', 'src/*/': 'CAMEL_CASE' }]",
  rule,
  {
    valid: [],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
        options: [{ '*/__tests__/': 'FOO', 'src/*/': 'CAMEL_CASE' }],
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
            message:
              'There is an invalid pattern "src/", please double-check it and try again',
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
      filename: 'src/utils/calculatePrice.js',
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

ruleTester.run(
  "filename-naming-convention with option: [{ '**/*.js': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE' }]",
  rule,
  {
    valid: [],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/utils/calculatePrice.js',
        options: [{ '**/*.js': 'NEXT_JS_PAGE_ROUTER_FILENAME_CASE' }],
        errors: [
          {
            message:
              'There is an invalid pattern "NEXT_JS_PAGE_ROUTER_FILENAME_CASE", please double-check it and try again',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  'filename-naming-convention with option: [{ "*": "KEBAB_CASE"}]',
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/Login/Utils/validationUtils.js',
        options: [{ '*': 'KEBAB_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/login/utils/validation.js',
        options: [{ '*': 'KEBAB_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/Index.js',
        options: [{ '*': 'KEBAB_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'main.js',
        options: [{ '*': 'KEBAB_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'SRC/login/utils/validation.js',
        options: [{ '*': 'KEBAB_CASE' }],
        errors: [
          {
            message: 'The folder "SRC" does not match the "KEBAB_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'Src/index.js',
        options: [{ '*': 'KEBAB_CASE' }],
        errors: [
          {
            message: 'The folder "Src" does not match the "KEBAB_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "folder-naming-convention with option: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/app/page.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/example-route/page.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/users/[userId]/page.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/[...auth]/route.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/shop/[[...shopId]]/page.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/@auth/page.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/(marketing)/page.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/_components/page.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/rss.xml/route.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/app/exampleRoute/page.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
        errors: [
          {
            message:
              'The folder "exampleRoute" does not match the "NEXT_JS_APP_ROUTER_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/users/[userId/page.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
        errors: [
          {
            message:
              'The folder "[userId" does not match the "NEXT_JS_APP_ROUTER_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/users/userId]/page.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
        errors: [
          {
            message:
              'The folder "userId]" does not match the "NEXT_JS_APP_ROUTER_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/[..auth]/route.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
        errors: [
          {
            message:
              'The folder "[..auth]" does not match the "NEXT_JS_APP_ROUTER_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/[...auth/route.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
        errors: [
          {
            message:
              'The folder "[...auth" does not match the "NEXT_JS_APP_ROUTER_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/...auth]/route.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
        errors: [
          {
            message:
              'The folder "...auth]" does not match the "NEXT_JS_APP_ROUTER_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/shop/[[...shopId]/page.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
        errors: [
          {
            message:
              'The folder "[[...shopId]" does not match the "NEXT_JS_APP_ROUTER_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/shop/[...shopId]]/page.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
        errors: [
          {
            message:
              'The folder "[...shopId]]" does not match the "NEXT_JS_APP_ROUTER_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/shop/[[..shopId]]/page.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
        errors: [
          {
            message:
              'The folder "[[..shopId]]" does not match the "NEXT_JS_APP_ROUTER_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/@authMarker/page.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
        errors: [
          {
            message:
              'The folder "@authMarker" does not match the "NEXT_JS_APP_ROUTER_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/(marketingSpeak)/page.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
        errors: [
          {
            message:
              'The folder "(marketingSpeak)" does not match the "NEXT_JS_APP_ROUTER_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/rss.xml.xl/route.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
        errors: [
          {
            message:
              'The folder "rss.xml.xl" does not match the "NEXT_JS_APP_ROUTER_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/app/Rss.xml/route.ts',
        options: [{ 'src/**/': 'NEXT_JS_APP_ROUTER_CASE' }],
        errors: [
          {
            message:
              'The folder "Rss.xml" does not match the "NEXT_JS_APP_ROUTER_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "folder-naming-convention with option: [{ 'src/**/': 'CAMEL_CASE' }, { errorMessage: 'The folder {{ target }} does not match the {{ pattern }} pattern, see contribute.md for details' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/displayLabel/displayLabel.js',
        options: [
          { 'src/**/': 'CAMEL_CASE' },
          {
            errorMessage:
              'The folder {{ target }} does not match the {{ pattern }} pattern, see contribute.md for details',
          },
        ],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/components/DisplayLabel/displayLabel.js',
        options: [
          { 'src/**/': 'CAMEL_CASE' },
          {
            errorMessage:
              'The folder {{ target }} does not match the {{ pattern }} pattern, see contribute.md for details',
          },
        ],
        errors: [
          {
            message:
              'The folder DisplayLabel does not match the CAMEL_CASE pattern, see contribute.md for details',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "folder-naming-convention with option: [{ 'mocks/**/': 'KEBAB_CASE' }, { ignoreWords: ['skip_word_a', 'skip_word_b'] }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'mocks/skip_word_a/app-mock.ts',
        options: [
          { 'mocks/**/': 'KEBAB_CASE' },
          { ignoreWords: ['skip_word_a', 'skip_word_b'] },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'mocks/skip_word_b/another-mock.ts',
        options: [
          { 'mocks/**/': 'KEBAB_CASE' },
          { ignoreWords: ['skip_word_a', 'skip_word_b'] },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'mocks/valid-kebab-case/mock.ts',
        options: [
          { 'mocks/**/': 'KEBAB_CASE' },
          { ignoreWords: ['skip_word_a', 'skip_word_b'] },
        ],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'mocks/InvalidCamelCase/mock.ts',
        options: [
          { 'mocks/**/': 'KEBAB_CASE' },
          { ignoreWords: ['skip_word_a', 'skip_word_b'] },
        ],
        errors: [
          {
            message:
              'The folder "InvalidCamelCase" does not match the "KEBAB_CASE" pattern',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);
