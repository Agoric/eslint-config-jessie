module.exports = {
	valid: [
		"for (i = 0; i < 5; i = i+1) { console.log(i); }"
	],
	invalid: [
		{
			code: "var person = {}; for (x in person) { console.log(x); }",
			errors: ["Unexpected for/in statement."]
		}
	]
};




