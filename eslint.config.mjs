// @ts-check

import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  js.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'no-console': 'error',
      'prettier/prettier': 'warn',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
  prettierConfig,
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'public/**',
    ],
  },
];

export default config;
