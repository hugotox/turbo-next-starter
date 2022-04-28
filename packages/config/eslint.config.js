module.exports = {
  extends: [
    'next',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:markdown/recommended'
  ],
  plugins: ['@typescript-eslint', '@emotion', 'sort-destructure-keys'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/named': 'off',
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'internal', ['parent', 'unknown'], 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '..',
            group: 'parent',
          },
          {
            pattern: '.',
            group: 'sibling',
          },
          {
            pattern: '{**,.,..}/*.{css,less,scss,gif,jpg,png,svg}',
            group: 'index',
            position: 'after',
          },
        ],
      },
    ],
    'react/jsx-sort-props': 'warn',
    'react/sort-prop-types': 'warn',
    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-keys': 'warn',
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
}
