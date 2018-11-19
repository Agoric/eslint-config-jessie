//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------




module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true
	},
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module",
		"ecmaFeatures": {
			"impliedStrict": true,
		}
	},
};

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");
