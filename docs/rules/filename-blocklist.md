# The filename should be blocklisted (filename-blocklist)

Allows you to blocklist certain file name patterns.

## Rule Details

This rule aims to maintain a consistent naming scheme.

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

You need to specify a different naming pattern for each filename blocklist. The second pattern is used to hint at the correct file name that should be used instead.

```js
module.exports = {
  plugins: [
    'check-file',
  ],
  rules: {
    'check-file/filename-blocklist': ['error', {
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
