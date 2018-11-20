// not a rule currently because 'strict' doesn't actually enforce the strict mode rules

module.exports = {
	valid: [
		"for (i = 0; i < 5; i = i+1) { console.log(i); }"
	],
	invalid: [
		{
			code: "false.true = ''; ",
			errors: ["Not allowed in strict mode.??"]
		}
	]
};
