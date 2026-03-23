import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    files: ['**/*.js'],
    plugins: {
      stylistic: stylistic,
    },
    rules: {
      'stylistic/semi': ['error', 'never'],
      'stylistic/quotes': ['error', 'single'],
      'stylistic/indent': ['error', 2],
      'stylistic/no-trailing-spaces': 'error',
      'stylistic/eol-last': 'error',
      'stylistic/comma-dangle': ['error', 'always-multiline']
    }
  }
];
