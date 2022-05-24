module.exports = {
  env: {
    node: true,
    jest: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'], // Your TypeScript files extension
      parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/*.config.js'],
  plugins: ['react', '@typescript-eslint', '@typescript-eslint', 'prettier'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['off', 'unix'],
    quotes: ['warn', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'no-console': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'no-unused-expressions': 'off',
    'prettier/prettier': 0,
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'import/no-default-export': 'off',
    'max-len': 'off',
    '@typescript-eslint/no-shadow': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
