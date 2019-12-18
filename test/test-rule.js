// to use, add the rule name after the file path:
// $ ./node_modules/mocha/bin/mocha test/test-rule.js "no-plusplus"

// mocha doesn't take arguments by default
// so it will look for a test with that name, so we have to just ignore that

const path = require('path');
const configTester = require('eslint-config-rule-tester');

const jessieConfig = require('../index');

// ruleName is the fourth argument
const ruleName = process.argv[3];

// import the tests for the selected rule
const tests = require(path.resolve(__dirname, './rules/', ruleName)); // eslint-disable-line import/no-dynamic-require

// put together eslint config that only includes the selected rule
const partialConfig = jessieConfig;
partialConfig.rules = {};
partialConfig.rules[ruleName] = jessieConfig.rules[ruleName];

console.log(partialConfig);

// run the tests and print results to the console
configTester(ruleName, partialConfig, tests);
