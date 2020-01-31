/* global module */
const overrides = [];

// Guard against infinite recursion.
if (!process.env.DISABLE_JESSIE_OVERRIDE) {
  const { partitionFromGlobs } = require('eslint-config-jessie/jessie-eslint');
  const [jessieFiles] = partitionFromGlobs(['**/*.js'], __dirname);
  if (jessieFiles.length) {
    // We have some Jessie files to apply against.
    overrides.push({
      files: jessieFiles,
      extends: ["jessie"],
    });
  }
}

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
