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
'check-file/filename-naming-convention': ['error', {'*.js': 'CAMEL_CASE'}],
...
```

Examples of **incorrect** filename for this rule:
```sh
calculate-price.js
CalculatePrice.js
calculate_price.js
calculateprice.js
```

Examples of **correct** filename for this rule:
```sh
calculatePrice.js
```

In addition to the built-in naming conventions, you can also set custom naming patterns using glob match syntax. The following code shows an example of how to ensure that all your `js` files are named begin with `__`:
```js
...
'check-file/filename-naming-convention': ['error', {'*.js': '__+([a-z])'}],
...
```

### Options
You need to specify a different naming pattern for different file extensions. The plugin will only check files with extensions you explicitly provided:

```js
module.exports = {
  plugins: [
    'check-file',
  ],
  rules: {
    'check-file/filename-naming-convention': ['error', {
      '*.{jsx,tsx}': 'CAMEL_CASE',
      '*.{js,ts}': 'KEBAB_CASE',
    }],
  },
};
```

## Further Reading
- [micromatch](https://github.com/micromatch/micromatch)
- [glob](https://en.wikipedia.org/wiki/Glob_(programming))
