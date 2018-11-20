module.exports = {
	valid: [
		"var name = \"ESLint\";",
		"object.method = function() {\n" +
		"    // ...\n" +
		"};"
	],
	invalid: [
		{
			code: "var name = 'ESLint'",
			errors: ["Missing semicolon."]
		},
		{
			code: "object.method = function() {\n" +
				"    // ...\n" +
				"}",
			errors: ["Missing semicolon."]
		}
	]
};
