module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base'
  ],
  rules: {
    "import/prefer-default-export": 0,
    "no-await-in-loop": 0,
    "no-restricted-syntax": 0
  }
};
