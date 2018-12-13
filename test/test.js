const path = require('path');
const requireIndex = require('requireindex');

const configTester = require('eslint-config-rule-tester');

const myConfig = {};
myConfig.env = require('../config/env.js');
myConfig.parserOptions = require('../config/parserOptions');

const rules = requireIndex(path.resolve(__dirname, '../config/rules'));

// we want to iterate over the rules and bring in their matching tests

Object.keys(rules).forEach(rule => {
  myConfig.rules = {};
  myConfig.rules[rule] = rules[rule];
  // eslint-disable-next-line global-require
  const test = require(path.resolve(__dirname, './rules/', rule)); // eslint-disable-line import/no-dynamic-require
  configTester(rule, myConfig, test);
});
