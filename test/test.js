'use strict';

const path = require('path');
const requireIndex = require("requireindex");

const configTester = require( path.resolve( __dirname, "./util/config-tester.js" ) );

const myConfig = {};
myConfig.env = require('../config/env.js');
myConfig.parserOptions = require('../config/parserOptions');
const rules = requireIndex(path.resolve(__dirname, "../config/rules"));

// we want to iterate over the rules and bring in their matching tests
for (const rule in rules) {
	if (rules.hasOwnProperty(rule)) {
		myConfig.rules = {};
		myConfig.rules[rule] = rules[rule];
		console.log(rule);
		const test = require(path.resolve(__dirname, "./rules/", rule));
		configTester.configTester(rule, myConfig, test);
	}
}
