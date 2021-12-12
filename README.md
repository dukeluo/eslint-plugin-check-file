# eslint-plugin-checkfolder

check the file folder

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
    "rules": {
        "checkfolder/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


