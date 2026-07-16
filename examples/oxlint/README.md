# eslint-plugin-check-file + Oxlint Example

This example demonstrates how to integrate `eslint-plugin-check-file` directly with Oxlint using its experimental JavaScript plugins feature (`jsPlugins`).

## Limitations for Non-JS/TS Files

Please note that Oxlint's `jsPlugins` feature is currently experimental and does not support ESLint processors for non-JS/TS files (such as `.css`, `.md`, and `.webp`).

In the ESLint example, these files are processed via the custom processor. In this Oxlint configuration, the rules for these extensions are defined within `.oxlintrc.json` for structural parity with the ESLint example, but they are silently ignored by Oxlint.

## Standard Project Configuration Guide

To configure this plugin in a standard project outside of this monorepo context:

1. Install `eslint-plugin-check-file` in your project.
2. In your `.oxlintrc.json`, load the plugin using its npm package name instead of a relative path:

   ```json
   {
     "jsPlugins": ["eslint-plugin-check-file"],
     "rules": {
       "check-file/no-index": "error"
     }
   }
   ```
