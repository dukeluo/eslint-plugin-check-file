# The folder should follow the folder naming convention (folder-naming-convention)

Allows you to enforce a consistent naming pattern for the name of the specified folder.

## Rule Details

This rule aims to format the name of the specified folder. This rule uses the glob match syntax to match a folder and declare the naming pattern for the name.

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
'check-file/folder-naming-convention': ['error', { 'src/**/': 'CAMEL_CASE' }],
...
```

Examples of **incorrect** folder name for this rule:

```sh
src/Components/DisplayLabel/displayLabel.js
src/components/DisplayLabel/displayLabel.js
src/components/displayLabel/DisplayLabel.js
```

Examples of **correct** folder name for this rule:

```sh
src/components/displayLabel/displayLabel.js
```

In addition to the built-in naming conventions, you can also set custom naming patterns using glob match syntax. The following code shows an example of how to ensure that all the folders under the `components` folder are named begin with `__`:
```js
...
'check-file/folder-naming-convention': ['error', [{ 'components/*/': '__+([a-z])' }]],
...
```

### Options

You need to specify a different naming pattern for different folder. The plugin will only check folders you explicitly provided:

```js
module.exports = {
  plugins: [
    'check-file',
  ],
  rules: {
    'check-file/folder-naming-convention': ['error', {
      'src/**/': 'CAMEL_CASE',
      'mocks/*/': 'KEBAB_CASE',
    }],
  },
};
```

## Further Reading

- [micromatch](https://github.com/micromatch/micromatch)
- [glob](https://en.wikipedia.org/wiki/Glob_(programming))
