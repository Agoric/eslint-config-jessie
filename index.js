module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true
	},
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"rules": {
		"strict": [
			"error",
		],
		"semi": [
			"error",
			"always"
		],
		"no-ternary": "error",
		"eqeqeq": [
			"error",
			"always"
		],
		"no-plusplus": "error",
		"no-bitwise": "error",
		"no-fallthrough": "error",
		"curly": "error",
		"no-restricted-globals": ["error", "RegExp", "Date"],
		"no-restricted-syntax": [
			"error",
			"BinaryExpression[operator='in']",
			"BinaryExpression[operator='instanceof']",
			"NewExpression",
			"FunctionDeclaration[generator=true]",
			"FunctionExpression[generator=true]",
			"FunctionDeclaration[async=true]",
			"FunctionExpression[async=true]",
			"ArrowFunctionExpression[async=true]",
			"DoWhileStatement",
			"ThisExpression",
			"UnaryExpression[operator='delete']",
			"ForInStatement",
			"MemberExpression[computed=true]",
			"Super",
			"MetaProperty",
			"ClassExpression",
			"CallExpression[callee.name='eval']",
		],
	}
};
