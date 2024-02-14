/**
 * @file The filename should be blocklisted
 * @author Florian Ehmke, Huan Luo
 */

import { RuleTester } from 'eslint';
import esmock from 'esmock';
import { posix } from 'path';

const rule = await esmock(
  '../../../lib/rules/filename-blocklist.js',
  {},
  {
    path: posix,
  }
);
const ruleTester = new RuleTester();

ruleTester.run(
  "filename-blocklist with option: [{ '*.models.ts': '*.model.ts', '*.utils.ts': '*.util.ts' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/foo.model.ts',
        options: [
          {
            '*.models.ts': '*.model.ts',
            '*.utils.ts': '*.util.ts',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/foo.util.ts',
        options: [
          {
            '*.models.ts': '*.model.ts',
            '*.utils.ts': '*.util.ts',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/foo.apis.ts',
        options: [
          {
            '*.models.ts': '*.model.ts',
            '*.utils.ts': '*.util.ts',
          },
        ],
      },
    ],
    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/foo.models.ts',
        options: [
          {
            '*.models.ts': '*.model.ts',
            '*.utils.ts': '*.util.ts',
          },
        ],
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
        filename: 'src/foo.utils.ts',
        options: [
          {
            '*.models.ts': '*.model.ts',
            '*.utils.ts': '*.util.ts',
          },
        ],
        errors: [
          {
            message:
              'The filename "foo.utils.ts" matches the blocklisted "*.utils.ts" pattern, use a pattern like "*.util.ts" instead',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-blocklist with option: [{ 'src/*.models.ts': '*.model.ts', 'src/*.utils.ts': '*.util.ts' }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'not-src/foo.model.ts',
        options: [
          {
            'src/*.models.ts': '*.model.ts',
            'src/*.utils.ts': '*.util.ts',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'not-src/foo.util.ts',
        options: [
          {
            'src/*.models.ts': '*.model.ts',
            'src/*.utils.ts': '*.util.ts',
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'not-src/foo.apis.ts',
        options: [
          {
            'src/*.models.ts': '*.model.ts',
            'src/*.utils.ts': '*.util.ts',
          },
        ],
      },
    ],
    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/foo.models.ts',
        options: [
          {
            'src/*.models.ts': '*.model.ts',
            'src/*.utils.ts': '*.util.ts',
          },
        ],
        errors: [
          {
            message:
              'The filename "foo.models.ts" matches the blocklisted "src/*.models.ts" pattern, use a pattern like "*.model.ts" instead',
            column: 1,
            line: 1,
          },
        ],
      },
      {
        code: "var foo = 'bar';",
        filename: 'src/foo.utils.ts',
        options: [
          {
            'src/*.models.ts': '*.model.ts',
            'src/*.utils.ts': '*.util.ts',
          },
        ],
        errors: [
          {
            message:
              'The filename "foo.utils.ts" matches the blocklisted "src/*.utils.ts" pattern, use a pattern like "*.util.ts" instead',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);

ruleTester.run(
  "filename-blocklist with option: [{ '*.models.ts': 'FOO' }]",
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
  "filename-blocklist with option: [{ 'models.ts': '*.model.ts' }]",
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

ruleTester.run('filename-blocklist with option: []', rule, {
  valid: [],

  invalid: [
    {
      code: "var foo = 'bar';",
      filename: 'src/foo.models.ts',
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
  "filename-blocklist with option: [{'*.models.ts': 'for some Non Glob related reason'}, { nonGlobSuggestion: true }]",
  rule,
  {
    valid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/foo.apis.ts',
        options: [
          {
            '*.models.ts': 'for some Non Glob related reason',
          },
          { nonGlobSuggestion: true },
        ],
      },
    ],

    invalid: [
      {
        code: "var foo = 'bar';",
        filename: 'src/foo.models.ts',
        options: [
          {
            '*.models.ts': 'for some Non Glob related reason',
          },
          { nonGlobSuggestion: true },
        ],
        errors: [
          {
            message:
              'The filename "foo.models.ts" matches the blocklisted "*.models.ts" pattern, this is not allowed for some Non Glob related reason',
            column: 1,
            line: 1,
          },
        ],
      },
    ],
  }
);
