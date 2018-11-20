const requireIndex = require("requireindex");

module.exports.env = require('./config/env.js');
module.exports.parserOptions = require('./config/parserOptions');

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/config/rules");

