/**
 * @file The filename should follow the filename naming convention
 * @author Florian Ehmke
 */
'use strict';

const rule = require('../../../lib/rules/filename-blacklist');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('filename-blacklist', rule, {
  valid: [
    {
      code: "var foo = 'bar';",
      filename: 'src/foo.model.ts',
      options: [{ '*.models.ts': '*.model.ts' }],
    },
    {
      code: "var foo = 'bar';",
      filename: 'src/foo.util‚.ts',
      options: [{ '*.utils.ts': '*.util.ts' }],
    },
  ],
  invalid: [
    {
      code: "var foo = 'bar';",
      filename: 'src/foo.models.ts',
      options: [{ '*.models.ts': '*.model.ts' }],
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
      options: [{ '*.utils.ts': '*.util.ts' }],
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
});
