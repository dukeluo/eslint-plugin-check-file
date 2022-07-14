# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


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
