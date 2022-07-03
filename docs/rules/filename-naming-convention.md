# The filename should follow the filename naming convention (filename-naming-convention)

Allows you to enforce a consistent naming pattern for the filename of the specified file.

## Rule Details

This rule aims to format the filename of the specified file. This rule uses the glob match syntax to match a file and declare the naming pattern for the filename.

There are six naming conventions built into this rule, including `CAMEL_CASE`, `PASCAL_CASE`, `SNAKE_CASE`, `KEBAB_CASE`, `SCREAMING_SNAKE_CASE` and `FLAT_CASE`.

| Formatting | Name |
|---|---|
| helloWorld | `CAMEL_CASE` |
| HelloWorld | `PASCAL_CASE` |
| hello_world | `SNAKE_CASE` |
| hello-world | `KEBAB_CASE` |
| HELLO_WORLD | `SCREAMING_SNAKE_CASE` |
| helloworld | `FLAT_CASE` |

If the rule had been set as follows:
```js
...
'check-file/filename-naming-convention': ['error', { 'src/services/*.js': 'PASCAL_CASE' }],
...
```

Examples of **incorrect** filename with path for this rule:
```sh
src/services/downloadService.js
src/services/downloadservice.js
src/services/download-service.js
src/services/download_service.js
```

Examples of **correct** filename with path for this rule:
```sh
src/services/DownloadService.js
src/download-service.js // this file is not be selected by the target pattern, so it is skipped
```

In addition to the built-in naming conventions, you can also set custom naming patterns using glob match syntax. The following code shows an example of how to ensure that all your `js` files are named begin with `__`:
```js
...
'check-file/filename-naming-convention': ['error', {'**/*.js': '__+([a-z])'}],
...
```

**Tip 1:** To exclude some config and test/spec files for all your `js` files, such as `babel.config.js` and `index.test.js`, use the glob expression `'**/!(*.spec|*.test|*.config).js'` to match the target files. This will exclude all `js` files with filenames containing `.spec`, `.test` or `.config`.

**Tip 2:** To selecte all your `js` files, your can use the glob expression `**/*.js`.

:warning: :warning: :warning:
**Versions below v1.2.0 can only select files by using their extensions. All `v1` versions will have this feature, but is will be removed in the future. Please select your target files by the file path. For example, using `**/*.js` instead of `*.js` to select all `js` files.**


### Options
You need to specify a different naming pattern for different file extensions. The plugin will only check files with extensions you explicitly provided:

```js
module.exports = {
  plugins: [
    'check-file',
  ],
  rules: {
    'check-file/filename-naming-convention': ['error', {
      '**/*.{jsx,tsx}': 'CAMEL_CASE',
      '**/*.{js,ts}': 'KEBAB_CASE',
    }],
  },
};
```

## Further Reading
- [micromatch](https://github.com/micromatch/micromatch)
- [glob](https://en.wikipedia.org/wiki/Glob_(programming))
