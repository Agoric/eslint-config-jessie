module.exports = {
	valid: [
		"var foo;\n" +
		"\n" +
		"if (isBar) {\n" +
		"    foo = baz;\n" +
		"} else {\n" +
		"    foo = qux;\n" +
		"}\n" +
		"\n" +
		"function quux() {\n" +
		"    if (foo) {\n" +
		"        return bar();\n" +
		"    } else {\n" +
		"        return baz();\n" +
		"    }\n" +
		"}"
	],
	invalid: [
		{
			code: "var foo = isBar ? baz : qux;",
			errors: ["Ternary operator used."]
		},
		{
			code: "function quux() {\n" +
				"  return foo ? bar() : baz();\n" +
				"}",
			errors: ["Ternary operator used."]
		}
	]
};
