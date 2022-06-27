module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: ['airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 0,
  },
};
