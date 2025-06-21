import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
// import onlyWarn from 'eslint-plugin-only-warn'; 
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

import gitignore from 'eslint-config-flat-gitignore';
import pluginImportX from 'eslint-plugin-import-x';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import turboPlugin from 'eslint-plugin-turbo';
import globals from 'globals';
import tseslint, { configs as tseslintConfigs } from 'typescript-eslint';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

// =========================================
// Eslint Config
// =========================================
const eslintConfig = [
  {
    name: 'base/eslint/recommended',
    files: ['**/*.js?(x)', '**/*.mjs'],
    ...js.configs.recommended,
  },
] as FlatConfig.Config[];

// =========================================
// TypeScript ESLint Config
// =========================================
const tseslintConfig = tseslint.config(
  {
    name: 'base/typescript-eslint/recommended',
    files: ['**/*.mjs', '**/*.ts?(x)'],
    extends: [...tseslintConfigs.recommended] as FlatConfig.ConfigArray,
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        projectService: true,

        project: ['./tsconfig.json', './apps/*/tsconfig.json', './packages/*/tsconfig.json'],

        // it is recommended to keep version warnings turned on
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    files: ['**/*.mjs'],
    ...tseslintConfigs.disableTypeChecked,
    name: 'base/typescript-eslint/disable-type-checked',
  },
);

// =========================================
// Ignore Config
// =========================================
const ignoresConfig = [
  {
    name: 'base/eslint/ignores',
    ignores: [...gitignore().ignores],
  },
] as FlatConfig.Config[];

// =========================================
// Import Config
// =========================================
const importConfig = [
  pluginImportX.flatConfigs.recommended,
  pluginImportX.flatConfigs.typescript,
  pluginImportX.flatConfigs.react,
  {
    name: 'base/import/recommended',
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'import-x/no-anonymous-default-export': 'warn',
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
          'newlines-between': 'always',
        },
      ],
      'import-x/first': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/no-unresolved': 'error',
    },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: ['./tsconfig.json', './apps/*/tsconfig.json', './packages/*/tsconfig.json'],
        }),
      ],
    },
    // settings: {
    //   'import/resolver': {
    //     typescript: true,
    //     node: true,
    //   },
    // },
  },
] as FlatConfig.Config[];

// =========================================
// Turbo Config
// =========================================
const turboConfig = [
  {
    name: 'base/turbo/recommended',
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
] as FlatConfig.Config[];

export const config = [
  ...eslintConfig,
  ...tseslintConfig,
  ...importConfig,
  ...turboConfig,
  ...ignoresConfig,
  pluginPrettierRecommended as FlatConfig.Config,
] satisfies FlatConfig.Config[];
