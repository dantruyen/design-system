# @dantruyen/eslint-config

This package includes ESLint configuration for Dan Truyen React App. The configuration extends of [eslint-config-react-app](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app) with some opinionated settings.

This config enforce users using TypeScript and Prettier, also use alias `@` for internal modules.

## Usage
First, install this package, ESLint and the necessary plugins.

```sh
npm install --save-dev @dantruyen/eslint-config eslint-config-react-app @typescript-eslint/eslint-plugin@3.x @typescript-eslint/parser@3.x babel-eslint@10.x eslint eslint-plugin-flowtype@4.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@4.x eslint-config-prettier@6.x eslint-plugin-prettier@3.x
```

Then create a file named `.eslintrc.json` with following contents in the root folder of your project:

```json
{
  "extends": "@dantruyen"
}
```