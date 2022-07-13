module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
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
    'linebreak-style': ['error', require('os').EOL === '\r\n' ? 'windows' : 'unix'],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'import/no-unresolved': 'off',
  },
};
