# A file cannot be named "index" (no-index)

Prevents files from being named "index".

## Rule Details

This rule aims to prevent files from being named "index", which will lead to files having meaningful names.

Examples of **incorrect** filename for this rule:

```sh
index.js
index.ts
```

Examples of **correct** filename for this rule:

```sh
calculatePrice.js
login.tsx
```

### Options

#### rule configuration object

##### `ignoreMiddleExtensions`

If `true`, the rule will ignore the middle extensions of the filename.

In some cases, you may want to ignore the middle extensions of the filename. For example, you want to lint the base name of the config files, e.g. `index.config.js`, you can do so by setting the `ignoreMiddleExtensions` option to `true`, and the rule will only validate its base name, in this case the base name will be `index`.

```js
export default [
  {
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'check-file/no-index': [
        'error',
        {
          ignoreMiddleExtensions: true,
        },
      ],
    },
  },
];
```

##### `errorMessage`

Customizes the error message displayed when a file is being named "index". It offers one placeholder for dynamic content:

- `{{ target }}`: Represents the filename of the blocked file.

```js
export default [
  {
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'check-file/no-index': [
        'error',
        {
          errorMessage:
            'The file "{{ target }}" is not allowed to be named "index", see contribute.md for details',
        },
      ],
    },
  },
];
```
