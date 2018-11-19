'use strict';

var path = require('path');
const configTester = require( path.resolve( __dirname, "./util/config-tester.js" ) );
const myConfig = require( path.resolve( __dirname, "../index.js" ) );
const noForIn = require( path.resolve( __dirname, "./rules/no-for-in.js" ) );
const strict = require( path.resolve( __dirname, "./rules/strict.js" ) );


console.log(myConfig);

//configTester.configTester(myConfig, noForIn);
configTester.configTester(myConfig, strict);
