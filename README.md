# eslint-plugin-check-file

[![NPM Version][npm-image]][downloads-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM License][license-image]][downloads-url]
[![Test Workflow Status][test-workflow-image]][workflow-url]
[![Test Coverage][test-coverage-image]][test-coverage-url]


ESLint rules for consistent filename and folder. Allows you to enforce a consistent naming pattern for the filename and folder.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install
`eslint-plugin-check-file`:

```sh
npm install eslint-plugin-check-file --save-dev
```

## Usage

Add `check-file` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "check-file"
  ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "check-file/folder-match-with-fex": [
      "error",
      {
        "*.test.{js,jsx,ts,tsx}": "**/__tests__/",
        "*.styled.{jsx,tsx}": "**/pages/"
      }
    ],
    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.{jsx,tsx}": "CAMEL_CASE",
        "**/*.{js,ts}": "KEBAB_CASE"
      }
    ],
    "check-file/no-index": "error",
    "check-file/folder-naming-convention": [
      "error",
      {
        "src/**/": "CAMEL_CASE",
        "mocks/*/": "KEBAB_CASE"
      }
    ],
    "check-file/filename-blocklist": [
      "error",
      {
        "**/*.model.ts": "*.models.ts",
        "**/*.util.ts": "*.utils.ts"
      }
    ]
  }
}
```

## Supported Rules

- [check-file/folder-match-with-fex](docs/rules/folder-match-with-fex.md): Enforce a consistent naming pattern for the folder of the specified file extension
- [check-file/filename-naming-convention](docs/rules/filename-naming-convention.md): Enforce a consistent naming pattern for the filename of the specified file
- [check-file/no-index](docs/rules/no-index.md): A file cannot be named "index"
- [check-file/folder-naming-convention](docs/rules/folder-naming-convention.md): Enforce a consistent naming pattern for the name of the specified folder
- [check-file/filename-blocklist](docs/rules/filename-blocklist.md): Blocklist file names by pattern


[npm-image]: https://img.shields.io/npm/v/eslint-plugin-check-file.svg
[downloads-image]: https://img.shields.io/npm/dm/eslint-plugin-check-file.svg
[license-image]: https://img.shields.io/npm/l/eslint-plugin-check-file
[test-workflow-image]: https://img.shields.io/github/actions/workflow/status/DukeLuo/eslint-plugin-check-file/test.yml?label=test
[test-coverage-image]: https://img.shields.io/codecov/c/gh/DukeLuo/eslint-plugin-check-file

[downloads-url]: https://www.npmjs.com/package/eslint-plugin-check-file
[workflow-url]: https://github.com/DukeLuo/eslint-plugin-check-file/actions
[test-coverage-url]: https://app.codecov.io/gh/DukeLuo/eslint-plugin-check-file
