import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';

import { config as baseConfig } from './base.js';

const viteConfig = [
  {
    name: 'base/vite/config',
    plugins: {
      react: pluginReact,
      'jsx-a11y': pluginJsxA11y,
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginJsxA11y.configs.strict.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/no-unknown-property': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-no-target-blank': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
] as FlatConfig.Config[];

export const config = [...baseConfig, ...viteConfig] satisfies FlatConfig.Config[];
