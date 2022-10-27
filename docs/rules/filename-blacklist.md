# The filename should not be blacklisted (filename-blacklist)

Allows you to blacklist certain file patterns.

## Rule Details

This rule aims to maintain a consistent naming scheme.

### Options

#### naming pattern object

You need to specify a different naming pattern for different file. The plugin will only check files you explicitly selected:

```js
module.exports = {
  plugins: [
    'check-file',
  ],
  rules: {
    'check-file/filename-blacklist': ['error', {
      '**/*.model.ts': '*.models.ts',
      '**/*.util.ts': '*.utils.ts',
    }],
  },
};
```

## Further Reading

- [micromatch](https://github.com/micromatch/micromatch)
- [glob](https://en.wikipedia.org/wiki/Glob_(programming))
- [testing glob expression online](https://globster.xyz)
