'use strict';

// to use, add the rule name after the file path:
// $ ./node_modules/mocha/bin/mocha test/test-rule.js "no-plusplus"
// mocha doesn't take arguments by default so it will look for a test with that name, so we have to just ignore that

const path = require('path');
const configTester = require("eslint-config-rule-tester");

// ruleName is the fourth argument
const ruleName = process.argv[3];
console.log(ruleName);

// import the tests for the selected rule
const tests = require(path.resolve(__dirname, "./rules/", ruleName));

// put together eslint config that only includes the selected rule
const myConfig = {};
myConfig.env = require('../config/env.js');
myConfig.parserOptions = require('../config/parserOptions');
myConfig.rules = {};
myConfig.rules[ruleName] = require(path.resolve(__dirname, "../config/rules", ruleName));

// run the tests and print results to the console
configTester.configTester(ruleName, myConfig, tests);
