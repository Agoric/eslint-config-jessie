module.exports = {
	valid: [
		"for (i = 0; i < 5; i = i+1) { console.log(i); }"
	],
	invalid: [
		{
			code: "false.true = ''; ",
			errors: ["Unexpected for/in statement."]
		}
	]
};
