const requireIndex = require('requireindex');
const path = require('path');

const configTester = require('eslint-config-rule-tester');

const myConfig = {};
myConfig.env = require('../config/env.js');
myConfig.parserOptions = require('../config/parserOptions');

// import all rules in lib/rules
myConfig.rules = requireIndex(path.join(__dirname, '../config/rules'));

// iterate through all the tests
Object.keys(myConfig.rules).forEach((rule) => {
  // eslint-disable-next-line global-require
  const test = require(path.resolve(__dirname, './rules/', rule)); // eslint-disable-line import/no-dynamic-require
  configTester(rule, myConfig, test);
});
