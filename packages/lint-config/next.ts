// @ts-expect-error 
import pluginNext from '@next/eslint-plugin-next';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

import { config as baseConfig } from './base.js';

const nextJsConfig = [
  {
    name: 'base/next/config',
    plugins: {
      react: pluginReact,
      'jsx-a11y': pluginJsxA11y,
      'react-hooks': pluginReactHooks,
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      ...pluginJsxA11y.configs.strict.rules,

      'react/no-unknown-property': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-no-target-blank': 'off',

      'jsx-a11y/alt-text': [
        'warn',
        {
          elements: ['img'],
          img: ['Image'],
        },
      ],
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
] as FlatConfig.Config[];

export const config = [...baseConfig, ...nextJsConfig] satisfies FlatConfig.Config[];
