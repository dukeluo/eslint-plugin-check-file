# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.3.1](https://github.com/dukeluo/eslint-plugin-check-file/compare/v3.3.0...v3.3.1) - 2025-11-03

### Fixed

- ignore dots inside brackets when extracting basename

## [3.3.0](https://github.com/dukeluo/eslint-plugin-check-file/compare/v3.2.0...v3.3.0) - 2025-06-09

### Added

- add `ignoreWords` parameter to `folder-naming-convention` rule

## [3.2.0](https://github.com/dukeluo/eslint-plugin-check-file/compare/v3.1.0...v3.2.0) - 2025-04-13

### Added

- add support for TypeScript declaration file

## [3.1.0](https://github.com/dukeluo/eslint-plugin-check-file/compare/v3.0.0...v3.1.0) - 2025-02-16

### Added

- add support for css,json,markdown parsers

### Changed

- improve documentation

## [3.0.0](https://github.com/dukeluo/eslint-plugin-check-file/compare/v2.8.0...v3.0.0) - 2025-01-30

### Added

- the plugin can lint non-js/ts files (e.g., images, styles, etc.) with processor `eslint-processor-check-file`
- the rule `filename-naming-convention` can be used with a new built-in naming convention `NEXT_JS_PAGE_ROUTER_FILENAME_CASE` which is used for Next.js page router project
- the rule `no-index` can set `errorMessage` property to customize the error message
- the rule `folder-match-with-fex` can set `errorMessage` property to customize the error message
- the rule `folder-naming-convention` can set `errorMessage` property to customize the error message

### Changed

- the error message of the rule `folder-match-with-fex` uses filename without path
- improve documentation

### Fixed

- `NEXT_JS_APP_ROUTER_CASE` can support filename route like `rss.xml`

### Removed

- remove legacy support for `context` object
- remove legacy support for rule `filename-blocklist`
- remove legacy configuration support

## [2.8.0](https://github.com/dukeluo/eslint-plugin-check-file/compare/v2.7.1...v2.8.0) - 2024-04-14

### Added

- support flat config for ESLint v9.0.0

## [2.7.1](https://github.com/dukeluo/eslint-plugin-check-file/compare/v2.7.0...v2.7.1) - 2024-02-24

### Fixed

- the rule `filename-blocklist` can set the suggested glob pattern as empty string when `errorMessage` is set

## [2.7.0](https://github.com/dukeluo/eslint-plugin-check-file/compare/v2.6.2...v2.7.0) - 2024-02-18

### Added

- the rule `filename-naming-convention` can set `errorMessage` property to customize the error message
- the rule `filename-blocklist` can set `errorMessage` property to customize the error message

### Changed

- Node.js version should >= 18

## [2.6.2](https://github.com/dukeluo/eslint-plugin-check-file/compare/v2.6.1...v2.6.2) - 2023-08-13

### Fixed

- the naming convention `NEXT_JS_APP_ROUTER_CASE` can support Next.js Private Folders

## [2.6.1](https://github.com/dukeluo/eslint-plugin-check-file/compare/v2.6.0...v2.6.1) - 2023-07-30

### Fixed

- fix bundle mistake in v2.6.0

## [2.6.0](https://github.com/dukeluo/eslint-plugin-check-file/compare/v2.5.0...v2.6.0) - 2023-07-30

### Added

- added ES Module support

### Deprecated

- deprecated Node.js 14 support

## [2.5.0](https://github.com/dukeluo/eslint-plugin-check-file/compare/v2.4.0...v2.5.0) - 2023-07-05

### Added

- the rule `folder-naming-convention` can be used with a new built-in naming convention `NEXT_JS_APP_ROUTER_CASE`

## [2.4.0](https://github.com/dukeluo/eslint-plugin-check-file/compare/v2.3.0...v2.4.0) - 2023-06-12

### Fixed

- the rule `folder-naming-convention` can work well with `*` in the glob

### Added

- the rule `no-index` can ignore middle extensions

### Changed

- improve documentation

## [2.3.0](https://github.com/dukeluo/eslint-plugin-check-file/compare/v2.2.0...v2.3.0) - 2023-05-13

### Fixed

- the rule `folder-naming-convention` can use a pattern with multiple matchers to select target folders

### Added

- the rule `filename-blocklist` should report an error when blocklist pattern object isn't an object type
- the rule `filename-naming-convention` should report an error when naming pattern object isn't an object type
- the rule `folder-match-with-fex` should report an error when naming pattern object isn't an object type
- the rule `folder-naming-convention` should report an error when naming pattern object isn't an object type

### Changed

- unify the style of error messages for the existing rules
- upgrade dependencies to the latest version

## [2.2.0](https://github.com/dukeluo/eslint-plugin-check-file/compare/v2.1.0...v2.2.0) - 2023-04-01

### Added

- the rule `filename-naming-convention` can use prefined match syntax

## [2.1.0](https://github.com/dukeluo/eslint-plugin-check-file/compare/v2.0.0...v2.1.0) - 2023-03-25

### Fixed

- the rule `filename-blacklist` can specify the target file by its file path

### Deprecated

- the rule `filename-blacklist` can specify the target file by its filename

## [2.0.0](https://github.com/dukeluo/eslint-plugin-check-file/compare/v1.3.1...v2.0.0) - 2023-03-05

### Changed

- the rule `filename-blacklist` renamed to `filename-blocklist`
- the rule `filename-naming-convention` show filename without path in error message

### Removed

- the rule `filename-naming-convention` can specify the target file by its extension

## [1.3.1](https://github.com/dukeluo/eslint-plugin-check-file/compare/v1.3.0...v1.3.1) - 2023-01-15

### Fixed

- fix builtin `CAMEL_CASE` glob expression

## [1.3.0](https://github.com/dukeluo/eslint-plugin-check-file/compare/v1.2.3...v1.3.0) - 2022-11-05

### Added

- the rule `filename-blacklist` can blacklist filenames by pattern

## [1.2.3](https://github.com/dukeluo/eslint-plugin-check-file/compare/v1.2.2...v1.2.3) -2022-09-22

### Fixed

- fix builtin `SNAKE_CASE`, `KEBAB_CASE` and `SCREAMING_SNAKE_CASE` glob expressions

### Changed

- reduce npm package size

## [1.2.2](https://github.com/dukeluo/eslint-plugin-check-file/compare/v1.2.1...v1.2.2) -2022-07-15

### Fixed

- enhance support for the Windows operating system

## [1.2.1](https://github.com/dukeluo/eslint-plugin-check-file/compare/v1.2.0...v1.2.1) -2022-07-09

### Added

- add CHANGELOG

### Changed

- add Windows operation system support

### Fixed

- fix get wrong folder issue when `eslint` is worked with processors

## [1.2.0](https://github.com/dukeluo/eslint-plugin-check-file/compare/v1.1.0...v1.2.0) - 2022-07-04

### Added

- the rule `filename-naming-convention` can specify the target file by its file path
- the rule `filename-naming-convention` can set `ignoreMiddleExtensions` property to ignore middle extensions when matching naming pattern

### Changed

- optimize docs

### Deprecated

- the rule `filename-naming-convention` can specify the target file by its extension

## [1.1.0](https://github.com/dukeluo/eslint-plugin-check-file/compare/v1.0.0...v1.1.0) - 2022-02-23

### Added

- `check-file/folder-naming-convention`: Enforce a consistent naming pattern for the name of the specified folder

## [1.0.0](https://github.com/dukeluo/eslint-plugin-check-file/releases/tag/v1.0.0) - 2022-01-11

### Added

- `check-file/folder-match-with-fex`: Enforce a consistent naming pattern for the folder of the specified file extension
- `check-file/filename-naming-convention`: Enforce a consistent naming pattern for the filename of the specified file extension
- `check-file/no-index`: A file cannot be named "index"
