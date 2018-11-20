module.exports = {
	valid: [
		"if (foo) {\n" +
		"\t\tfoo++;\n" +
		"\t}",
		"while (bar) {\n" +
		"\t\tbaz();\n" +
		"\t}",
		"if (foo) {\n" +
		"\t\tbaz();\n" +
		"\t} else {\n" +
		"\t\tqux();\n" +
		"}",
		"switch (false) {\n" +
		"    case true: {\n" +
		"      let x = \"bar\";\n" +
		"      console.log(x);\n" +
		"      break;\n" +
		"    }\n" +
		"\n" +
		"    case false: {\n" +
		"      let x = \"baz\";\n" +
		"      console.log(x);\n" +
		"      break;\n" +
		"    }\n" +
		"}",
	],
	invalid: [
		{
			code: "if (foo) foo++;",
			errors: ["Expected { after \'if\' condition."]
		},
		{
			code: "while (bar)\n" +
				"\tbaz();",
			errors: ["Expected { after \'while\' condition."]
		},
		{
			code: "if (foo) {\n" +
				"\tbaz();\n" +
				"} else qux();",
			errors: ["Expected { after \'else\'."]
		},
		// {
		// 	code: "switch (false) {\n" +
		// 		"    case true: \n" +
		// 		"      let x = \"bar\";\n" +
		// 		"      console.log(x);\n" +
		// 		"      break;\n" +
		// 		"}",
		// 	errors: ["Expected { after \'true:\'."]
		// },
	]
};
