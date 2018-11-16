'use strict';

var path = require('path');
const configTester = require( path.resolve( __dirname, "./config-tester.js" ) );
const myConfig = require( path.resolve( __dirname, "../index.js" ) );
const noForIn = require( path.resolve( __dirname, "./rules/no-for-in.js" ) );

console.log(noForIn);

configTester.configTester(myConfig, noForIn);
