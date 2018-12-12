const requireIndex = require('requireindex');
const path = require('path');


module.exports.env = require('./config/env.js');
module.exports.parserOptions = require('./config/parserOptions');

// import all rules in lib/rules
module.exports.rules = requireIndex(path.join(__dirname, '/config/rules'));
