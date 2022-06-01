module.exports = {
  extends: [
    'airbnb-base',
    // omit whitespace rules
    // https://github.com/prettier/eslint-config-prettier#eslint-config-prettier
    'prettier',
  ],
  env: {
    es6: true, // supports new ES6 globals (e.g., new types such as Set)
  },
  rules: {
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'arrow-parens': 'off',
    strict: 'off',
    'no-console': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': ['off', 'ForOfStatement'],
  },
};
