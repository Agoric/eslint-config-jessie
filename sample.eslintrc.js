// eslint-disable-next-line import/no-unresolved
const { jessieOverrides } = require('eslint-config-jessie/util');

const overrides = [...jessieOverrides(['**/*.js'], __dirname)];

module.exports = {
  env: {
    es6: true, // supports new ES6 globals (e.g., new types such as Set)
  },
  overrides,
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
    'no-unused-expressions': 'off',
    'no-loop-func': 'off',
    'import/prefer-default-export': 'off', // contrary to Agoric standard
  },
};
