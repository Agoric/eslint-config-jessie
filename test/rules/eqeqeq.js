module.exports = {
	valid: [
		"a === b",
		"foo === true",
		"bananas !== 1",
		"value === undefined",
		"typeof foo === 'undefined'",
		"'hello' !== 'world'",
		"0 === 0",
		"true === true",
		"foo === null",
	],
	invalid: [
		{
			code: "if (\"\" == text) { }",
			errors: ["Expected '===' and instead saw '=='."]
		},
		{
			code: "if (x == 42) { }",
			errors: ["Expected '===' and instead saw '=='."]
		},
		{
			code: "if (obj.getStuff() != undefined) { }\n",
			errors: ["Expected '!==' and instead saw '!='."]
		}
	]
}






