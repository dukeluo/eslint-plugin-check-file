# eslint-plugin-check-file

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

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
    "check-file/filename-blacklist": [
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
- [check-file/filename-blacklist](docs/rules/filename-blacklist.md): Blacklist file names by pattern


[npm-image]: https://img.shields.io/npm/v/eslint-plugin-check-file.svg
[npm-url]: https://www.npmjs.com/package/eslint-plugin-check-file
[downloads-image]: https://img.shields.io/npm/dm/eslint-plugin-check-file.svg
[downloads-url]: https://www.npmjs.com/package/eslint-plugin-check-file
