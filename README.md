# eslint-plugin-check-file

[![NPM Version][npm-image]][downloads-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM License][license-image]][downloads-url]
[![Test Workflow Status][test-workflow-image]][workflow-url]
[![Test Coverage][test-coverage-image]][test-coverage-url]
[![Follow Author on X][x-follow-image]][x-follow-url]
[<img src="https://api.gitsponsors.com/api/badge/img?id=439649936" height="20">](https://api.gitsponsors.com/api/badge/link?p=sWWrO/PDXbOZNiardp+OHaNz6UE+2Zpns/SZ+BJW5DKCJpv+39/7p5ee3SV24q2yEQvF9vHhsGs3enN4swtSQhVuXaBcXCJ9SQPi4u4lv4cwbzwb76zvwlIXy3gS6z+jhLF96Z+U8f3Rpr/QI2NLRA==)

An ESLint plugin that enforces consistent naming conventions for files and folders in your project. It helps maintain a clean and organized codebase by allowing you to define and enforce specific patterns for filenames and directory structures.

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

This plugin supports ESLint's [flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files). Here's a complete example:

```javascript
import checkFile from 'eslint-plugin-check-file';

export default [
  {
    // optional: add this processor to files which not processed by other processors
    files: ['**/*.yaml', '**/*.webp', '**/.gitignore'],
    processor: 'check-file/eslint-processor-check-file',
  },
  {
    files: ['src/**/*.*'],
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'check-file/no-index': 'error',
      'check-file/filename-blocklist': [
        'error',
        {
          '**/*.model.ts': '*.models.ts',
          '**/*.util.ts': '*.utils.ts',
        },
      ],
      'check-file/folder-match-with-fex': [
        'error',
        {
          '*.test.{js,jsx,ts,tsx}': '**/__tests__/',
          '*.styled.{jsx,tsx}': '**/components/',
        },
      ],
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{jsx,tsx}': 'PASCAL_CASE',
          '**/*.{js,ts}': 'CAMEL_CASE',
        },
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/components/*/': 'PASCAL_CASE',
          'src/!(components)/**/!(__tests__)/': 'CAMEL_CASE',
        },
      ],
    },
  },
];
```

## Supported Rules

- [check-file/no-index](docs/rules/no-index.md): A file cannot be named "index"
- [check-file/filename-blocklist](docs/rules/filename-blocklist.md): Blocklist filenames by pattern
- [check-file/folder-match-with-fex](docs/rules/folder-match-with-fex.md): Enforce a consistent naming pattern for folder names for specified files
- [check-file/filename-naming-convention](docs/rules/filename-naming-convention.md): Enforce a consistent naming pattern for filenames for specified files
- [check-file/folder-naming-convention](docs/rules/folder-naming-convention.md): Enforce a consistent naming pattern for folder names for specified folders

## Version Compatibility

Version 3.x and above only support ESLint's flat configuration. For legacy configuration support, please use version 2.x.

## Support

If you find this plugin helpful, consider supporting the project:

[![GitHub Sponsors][github-sponsors-image]][github-sponsors-url]

[![Ko-fi][ko-fi-image]][ko-fi-url]

[npm-image]: https://img.shields.io/npm/v/eslint-plugin-check-file.svg
[downloads-image]: https://img.shields.io/npm/dm/eslint-plugin-check-file.svg
[license-image]: https://img.shields.io/npm/l/eslint-plugin-check-file
[test-workflow-image]: https://img.shields.io/github/actions/workflow/status/dukeluo/eslint-plugin-check-file/test.yml?label=test
[test-coverage-image]: https://img.shields.io/codecov/c/gh/dukeluo/eslint-plugin-check-file
[ko-fi-image]: https://ko-fi.com/img/githubbutton_sm.svg
[x-follow-image]: https://img.shields.io/badge/follow-@ihuanluo-black
[downloads-url]: https://www.npmjs.com/package/eslint-plugin-check-file
[workflow-url]: https://github.com/dukeluo/eslint-plugin-check-file/actions
[test-coverage-url]: https://app.codecov.io/gh/dukeluo/eslint-plugin-check-file
[ko-fi-url]: https://ko-fi.com/huanluo
[x-follow-url]: https://x.com/ihuanluo
[github-sponsors-image]: https://img.shields.io/github/sponsors/dukeluo?label=Sponsor%20me%20on%20GitHub%20Sponsors
[github-sponsors-url]: https://github.com/sponsors/dukeluo
