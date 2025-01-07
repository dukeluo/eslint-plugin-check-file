# The filename should be blocklisted (filename-blocklist)

Allows you to blocklist certain filename patterns.

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

When `errorMessage` is set, the suggested glob pattern is not necessary, it can be set as empty string.

```js
module.exports = {
  plugins: ['check-file'],
  rules: {
    'check-file/filename-blocklist': [
      'error',
      { '*.models.ts': '' },
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
