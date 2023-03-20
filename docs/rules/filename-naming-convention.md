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
src/download-service.js // this file is not be specified by the target pattern, so it is skipped
```

In addition to the built-in naming conventions, you can also set custom naming patterns using glob match syntax. The following code shows an example of how to ensure that all your `js` files are named begin with `__`:
```js
...
'check-file/filename-naming-convention': ['error', {'**/*.js': '__+([a-z])'}],
...
```

**Tip:** To selecte all your `js` files, your can use the glob expression `**/*.js`.

:warning: :warning: :warning:

**v1 versions have the legacy support for selecting target files based on their extensions. This legacy support has been removed since v2.0.0. Please select your target files by their file path. For example, using `**/*.js` instead of `*.js` to select all `js` files.**


### Options

#### naming pattern object

You need to specify a different naming pattern for different file. The plugin will only check files you explicitly selected:

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

#### using capture groups

You can use glob capture groups in you rule set using the `<index>` syntax. Read more about glob capture groups in the [micromatch documentation](https://github.com/micromatch/micromatch#capture).

For example the following rule will only allow a file to be named the same as its parent folder :

```js
module.exports = {
  plugins: ['check-file'],
  rules: {
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/*/*': '<1>',
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],
  },
};
```

#### rule configuration object

##### `ignoreMiddleExtensions`

If `true`, the rule will ignore the middle extensions of the filename.

In some cases, you may want to ignore the middle extensions of the filename. For example, you want to lint the base name of the config and test/spec files—e.g., `babel.config.js` and `date.test.js`, you can do so by setting the `ignoreMiddleExtensions` option to `true`, and the rule will only validate its base name, in this case the base name will be `babel` and `date`.

```js
module.exports = {
  plugins: ['check-file'],
  rules: {
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/*.{jsx,tsx}': 'CAMEL_CASE',
        '**/*.{js,ts}': 'KEBAB_CASE',
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],
  },
};
```

## Further Reading

- [micromatch](https://github.com/micromatch/micromatch)
- [glob](https://en.wikipedia.org/wiki/Glob_(programming))
- [testing glob expression online](https://globster.xyz)
