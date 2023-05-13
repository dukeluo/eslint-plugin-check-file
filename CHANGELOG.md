# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.3.0](https://github.com/DukeLuo/eslint-plugin-check-file/compare/v2.2.0...v2.3.0) - 2023-05-13

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


## [2.2.0](https://github.com/DukeLuo/eslint-plugin-check-file/compare/v2.1.0...v2.2.0) - 2023-04-01

### Added
- the rule `filename-naming-convention` can use prefined match syntax


## [2.1.0](https://github.com/DukeLuo/eslint-plugin-check-file/compare/v2.0.0...v2.1.0) - 2023-03-25

### Fixed
- the rule `filename-blacklist` can specify the target file by its file path

### Deprecated
- the rule `filename-blacklist` can specify the target file by its filename


## [2.0.0](https://github.com/DukeLuo/eslint-plugin-check-file/compare/v1.3.1...v2.0.0) - 2023-03-05

### Changed
- the rule `filename-blacklist` renamed to `filename-blocklist`
- the rule `filename-naming-convention` show filename without path in error message

### Removed
- the rule `filename-naming-convention` can specify the target file by its extension


## [1.3.1](https://github.com/DukeLuo/eslint-plugin-check-file/compare/v1.3.0...v1.3.1) - 2023-01-15

### Fixed
- fix builtin `CAMEL_CASE` glob expression


## [1.3.0](https://github.com/DukeLuo/eslint-plugin-check-file/compare/v1.2.3...v1.3.0) - 2022-11-05

### Added
- the rule `filename-blacklist` can blacklist file names by pattern


## [1.2.3](https://github.com/DukeLuo/eslint-plugin-check-file/compare/v1.2.2...v1.2.3) -2022-09-22

### Fixed
- fix builtin `SNAKE_CASE`, `KEBAB_CASE` and `SCREAMING_SNAKE_CASE` glob expressions

### Changed
- reduce npm package size

## [1.2.2](https://github.com/DukeLuo/eslint-plugin-check-file/compare/v1.2.1...v1.2.2) -2022-07-15

### Fixed
- enhance support for the Windows operating system


## [1.2.1](https://github.com/DukeLuo/eslint-plugin-check-file/compare/v1.2.0...v1.2.1) -2022-07-09

### Added
- add CHANGELOG

### Changed
- add Windows operation system support

### Fixed
- fix get wrong folder issue when `eslint` is worked with processors


## [1.2.0](https://github.com/DukeLuo/eslint-plugin-check-file/compare/v1.1.0...v1.2.0) - 2022-07-04

### Added
- the rule `filename-naming-convention` can specify the target file by its file path
- the rule `filename-naming-convention` can set `ignoreMiddleExtensions` property to ignore middle extensions when matching naming pattern

### Changed
- optimize docs

### Deprecated
- the rule `filename-naming-convention` can specify the target file by its extension


## [1.1.0](https://github.com/DukeLuo/eslint-plugin-check-file/compare/v1.0.0...v1.1.0) - 2022-02-23

### Added
- `check-file/folder-naming-convention`: Enforce a consistent naming pattern for the name of the specified folder


## [1.0.0](https://github.com/DukeLuo/eslint-plugin-check-file/releases/tag/v1.0.0) - 2022-01-11

### Added
- `check-file/folder-match-with-fex`: Enforce a consistent naming pattern for the folder of the specified file extension
- `check-file/filename-naming-convention`: Enforce a consistent naming pattern for the filename of the specified file extension
- `check-file/no-index`: A file cannot be named "index"
