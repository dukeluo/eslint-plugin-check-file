# The folder should follow the folder naming convention (folder-naming-convention)

Allows you to enforce a consistent naming pattern for the name of the specified folder.

## Rule Details

This rule aims to format the name of the specified folder. This rule uses the glob match syntax to match target folders and declare the naming pattern for the folder name.

There are six basic naming conventions built into this rule, including `CAMEL_CASE`, `PASCAL_CASE`, `SNAKE_CASE`, `KEBAB_CASE`, `SCREAMING_SNAKE_CASE` and `FLAT_CASE`.

Additionally, there is a naming convention called `NEXT_JS_APP_ROUTER_CASE` used to format folder names in Next.js projects that use the App Router. You can read more about it under [Built-in custom patterns](#built-in-custom-patterns).

| Formatting  | Name                   |
| ----------- | ---------------------- |
| helloWorld  | `CAMEL_CASE`           |
| HelloWorld  | `PASCAL_CASE`          |
| hello_world | `SNAKE_CASE`           |
| hello-world | `KEBAB_CASE`           |
| HELLO_WORLD | `SCREAMING_SNAKE_CASE` |
| helloworld  | `FLAT_CASE`            |

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

## Custom patterns

In addition to the built-in naming conventions, you can also set custom naming patterns using glob match syntax. The following code shows an example of how to ensure that all the folders under the `components` folder are named begin with `__`:

```js
...
'check-file/folder-naming-convention': ['error', [{ 'components/*/': '__+([a-z])' }]],
...
```

**Tip:** To exclude `__tests__` folder in `src`, use the glob expression `src/!(__tests__)/**/` to get the target folders.

## Built-in custom patterns

Some patterns are complex enough that they warrant their own definition within the lib.

### Next.js custom pattern

The `NEXT_JS_APP_ROUTER_CASE` aims to support a wide range of named constructs in Next.js App Router projects.

If you would like to enforce a kebab-case naming convention for your folders, but also support Next.js' Standard routes, Dynamic segments, Catch-all segments, Optional Catch-all Segments, Route groups, and Named slots, this pattern is for you.

When using the pattern, all your folders need to be kebab-cased, but you can also do dynamic segments with camel case, so that it flows more natural with the code, i.e.

```
/src/app/help-pages/[pageId]
```

This is powerful because it allows you to have consistent link names, i.e. the links will be kebab cased, which is the most natural way of naming URL path segments.

But when you get in code and the dynamic segment needs to be passed to your component, you'll have a camel cased variable, i.e.

```
// /src/app/help-pages/[pageId]/page.tsx

// If we have named our parameter "page-id", then you'd get "page-id" inside of
// the params object, and you'd have to escape it, which would look nasty
export const Page({ params: { pageId } }) { ... }
```

Besides this, the custom pattern should support all other Next.js naming conventions.

You can read more about them [here](https://github.com/DukeLuo/eslint-plugin-check-file/pull/27#issuecomment-1582551071).

While `NEXT_JS_APP_ROUTER_CASE` covers many naming cases, it's possible that some cases may be missing. If you come across any missing cases, I encourage you to open an issue and provide the necessary details. Your feedback will help me improve and enhance the naming convention.

### Options

#### naming pattern object

The key is used to select target folders, while the value is used to declare the naming pattern for the folder name. You can specify a different naming pattern for different target folders. The plugin will only check folders you explicitly provided:

```js
module.exports = {
  plugins: ['check-file'],
  rules: {
    'check-file/folder-naming-convention': [
      'error',
      {
        'src/**/': 'CAMEL_CASE',
        'mocks/*/': 'KEBAB_CASE',
      },
    ],
  },
};
```

## Further Reading

- [micromatch](https://github.com/micromatch/micromatch)
- [glob](<https://en.wikipedia.org/wiki/Glob_(programming)>)
- [testing glob expression online](https://globster.xyz)
