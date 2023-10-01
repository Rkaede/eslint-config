module.exports = {
  env: {
    browser: true,
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/strict',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'prettier',
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
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
    'import/resolver': {
      node: {
        typescript: false,
        node: true,
      },
    },
  },
  // for typescript
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      plugins: ['@typescript-eslint', 'prettier'],
      extends: [
        'eslint:recommended',
        'plugin:jsx-a11y/strict',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
      ],
      settings: {
        'import/resolver': {
          node: {
            typescript: true,
            node: true,
          },
        },
      },
      rules: {
        '@typescript-eslint/no-unused-vars': ['error'],
        'prettier/prettier': [
          'error',
          { singleQuote: true, endOfLine: 'auto', jsxSingleQuote: false },
        ],
        'import/first': 'error',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
};
