# The folder should match the naming pattern specified by its file (folder-match-with-fex)

Allows you to enforce a consistent naming pattern for the specified files' folder names.

## Rule Details

This rule aims to format the folder of the specified files. It will be useful when you want to group the specified files into a folder. This rule uses the glob match syntax to match target files and declare the naming pattern for their folder names.

If the rule had been set as follows:

```js
...
'check-file/folder-match-with-fex': ['error', {'*.test.js': '**/__tests__/'}],
...
```

For the file `foo.test.js`, examples of **incorrect** folder for this rule:

```sh
bar/_tests_/foo.test.js
```

For the file `foo.test.js`, examples of **correct** folder for this rule:

```sh
bar/__tests__/foo.test.js
```

### Options

#### naming pattern object

The key is used to select target files, while the value is used to declare the naming pattern for their folder names. You can specify a different folder naming pattern for different target files. The plugin will only check files you explicitly provided:

```js
module.exports = {
  plugins: ['check-file'],
  rules: {
    'check-file/folder-match-with-fex': [
      'error',
      {
        '*.test.{js,jsx,ts,tsx}': '**/__tests__/',
        '*.styled.{jsx,tsx}': '**/pages/',
      },
    ],
  },
};
```

## Further Reading

- [micromatch](https://github.com/micromatch/micromatch)
- [glob](<https://en.wikipedia.org/wiki/Glob_(programming)>)
- [testing glob expression online](https://globster.xyz)
