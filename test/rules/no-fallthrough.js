module.exports = {
	valid: [
		"switch(foo) {\n" +
		"    case 1:\n" +
		"        doSomething();\n" +
		"        break;\n" +
		"\n" +
		"    case 2:\n" +
		"        doSomething();\n" +
		"}\n" ,

		"function bar(foo) {\n" +
		"    switch(foo) {\n" +
		"        case 1:\n" +
		"            doSomething();\n" +
		"            return;\n" +
		"\n" +
		"        case 2:\n" +
		"            doSomething();\n" +
		"    }\n" +
		"}\n" ,

		"switch(foo) {\n" +
		"    case 1:\n" +
		"        doSomething();\n" +
		"        throw new Error(\"Boo!\");\n" +
		"\n" +
		"    case 2:\n" +
		"        doSomething();\n" +
		"}\n" ,

		"switch(foo) {\n" +
		"    case 1:\n" +
		"    case 2:\n" +
		"        doSomething();\n" +
		"}\n",
	],
	invalid: [
		{
			code: "switch(foo) {\n" +
				"    case 1:\n" +
				"        doSomething();\n" +
				"\n" +
				"    case 2:\n" +
				"        doSomething();\n" +
				"}",
			errors: ["Expected a 'break' statement before 'case'."]
		},
		{
			code: "switch(foo) {\n" +
				"    case 1:\n" +
				"        doSomething();\n" +
				"        // falls through\n" +
				"\n" +
				"    case 2:\n" +
				"        doSomething();\n" +
				"}",
			errors: ["Expected a 'break' statement before 'case'."]
		},
	]
};

