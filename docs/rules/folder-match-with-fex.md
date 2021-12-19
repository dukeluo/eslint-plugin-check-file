# The folder should match the naming pattern specified by the file extension (folder-match-with-fex)

Allows you to enforce a consistent naming pattern for the folder of the specified file.

## Rule Details

This rule aims to format the folder of the specified file. This rule uses the glob match syntax to match a file and declare the naming pattern for the folder.

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
You need to specify a different naming pattern for different file extensions. The plugin will only check files with extensions you explicitly provided:

```js
module.exports = {
  plugins: [
    'check-file',
  ],
  rules: {
    'check-file/folder-match-with-fex': ['error', {
      '*.test.{js,jsx,ts,tsx}': '**/__tests__/',
      '*.styled.{jsx,tsx}': '**/pages/',
    }],
  },
};
```

## Further Reading
- [micromatch](https://github.com/micromatch/micromatch)
- [glob](https://en.wikipedia.org/wiki/Glob_(programming))
