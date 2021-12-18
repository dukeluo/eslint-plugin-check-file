# eslint-plugin-checkfolder

Allows you to enforce a consistent naming pattern for the folder of the specified file.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-checkfolder`:

```sh
npm install eslint-plugin-checkfolder --save-dev
```

## Usage

Add `checkfolder` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "checkfolder"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
   "rules":{
      "checkfolder/match-with-fex":[
         "error",
         {
            "*.test.{js,jsx,ts,tsx}":"**/__tests__/",
            "*.styled.{jsx,tsx}":"**/pages/"
         }
      ]
   }
}
```

## Supported Rules

- [checkfolder/match-with-fex](docs/rules/match-with-fex.md): Enforce a consistent naming pattern for the folder of the specified file


