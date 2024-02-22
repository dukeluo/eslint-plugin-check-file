# The filename should be blocklisted (filename-blocklist)

Allows you to blocklist certain filename patterns.

:warning: :warning: :warning:

**The rule was called `filename-blacklist` in versions below v2.0.0. This rule name has been abandoned since it is less inclusive. Please update to the latest rule name.**

## Rule Details

This rule aims to maintain a consistent naming scheme. This rule uses the glob match syntax to declare blocklisted and preferred filename patterns.

If the rule had been set as follows:

```js
...
'check-file/filename-blocklist': ['error', { '**/*.model.ts': '*.models.ts' }],
...
```

Examples of **incorrect** filename with path for this rule:

```sh
src/foo.model.ts
src/bar.model.ts
```

Examples of **correct** filename with path for this rule:

```sh
src/foo.models.ts
src/bar.models.ts
```

:warning: :warning: :warning:

**Versions <= v2.0.0 can only select target files by their filenames, not by their paths. This support has been deprecated and will be removed in the future. Please select your target files by their file path. For example, using `**/_.js`instead of`_.js`to select all`js` files.\*\*

### Options

#### blocklist pattern object

The key is used to declare the blocklisted filename pattern, while the value is used to hint at the correct filename that should be used instead. Both the key and value in the blocklist pattern object are glob expressions. The plugin will only check blocklisted pattern you explicitly provided:

```js
module.exports = {
  plugins: ['check-file'],
  rules: {
    'check-file/filename-blocklist': [
      'error',
      {
        '**/*.model.ts': '*.models.ts',
        '**/*.util.ts': '*.utils.ts',
      },
    ],
  },
};
```

#### rule configuration object

##### `errorMessage`

Customizes the error message displayed when a file is blocked due to matching a blocklisted filename pattern. It offers two placeholders for dynamic content:

- `{{ target }}`: Represents the filename of the blocked file.
- `{{ pattern }}`: Represents the blocklisted filename pattern.

```js
module.exports = {
  plugins: ['check-file'],
  rules: {
    'check-file/filename-blocklist': [
      'error',
      { '*.models.ts': '*.model.ts' },
      {
        errorMessage:
          'The file "{{ target }}" is blocked since it since it matches the blocklisted pattern "{{ pattern }}", see contribute.md for details',
      },
    ],
  },
};
```

## Further Reading

- [micromatch](https://github.com/micromatch/micromatch)
- [glob](<https://en.wikipedia.org/wiki/Glob_(programming)>)
- [testing glob expression online](https://globster.xyz)
