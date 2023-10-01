module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/strict',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      { singleQuote: true, endOfLine: 'auto', jsxSingleQuote: false },
    ],
    'import/first': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
  },
  // for typescript
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
        },
      },
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:jsx-a11y/strict',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': ['error'],
        'prettier/prettier': [
          'error',
          { singleQuote: true, endOfLine: 'auto', jsxSingleQuote: false },
        ],
        'import/first': 'error',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
};
