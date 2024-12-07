import js from '@eslint/js';
import eslintPlugin from 'eslint-plugin-eslint-plugin';
import jsdoc from 'eslint-plugin-jsdoc';
import node from 'eslint-plugin-n';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['dist'],
  },
  js.configs.recommended,
  eslintPlugin.configs['flat/recommended'],
  jsdoc.configs['flat/recommended'],
  node.configs['flat/recommended'],
  prettier,
];
