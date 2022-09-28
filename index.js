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
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            project: './tsconfig.json',
          },
        },
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
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
        'no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': [
          'error',
          { singleQuote: true, endOfLine: 'auto', jsxSingleQuote: false },
        ],
        'import/first': 'error',
      },
    },
  ],
};
