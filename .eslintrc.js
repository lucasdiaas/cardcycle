module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['mywork/typescript', 'mywork/prettier'],
  rules: {
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', { packageDir: __dirname }],
    'import/no-unresolved': 'off',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
    }
  },
  env: {
    jest: true
  },
  globals: {
    __DEV__: false
  }
};