module.exports = {
	valid: [
		"for (i = 0; i < 5; i = i+1) { console.log(i); }" // for/in
	],
	invalid: [
		{
			code: "var person = {}; for (x in person) { console.log(x); }", // for/in
			errors: ["for/in statements are not allowed."]
		},
		{
			code: "var car = {make: 'Honda', model: 'Accord', year: 1998};\n" + // "BinaryExpression[operator='in']"
				"'make' in car;",
			errors: ["'in' is not allowed."]
		},
		{
			code: "function Foo() { this.a = 0; };", // "ThisExpression"
			errors: ["'this' not allowed."]
		},
		{
			code: "'' instanceof String;", // "BinaryExpression[operator='instanceof']",
			errors: ["'instanceof' is not allowed."]
		},
		{
			code: "var rand = new Person('Rand McNally', 33, 'M');", // "NewExpression",
			errors: ["'new' is not allowed."]
		},
		{
			code: "function* makeRangeIterator(start = 0, end = Infinity, step = 1) {\n" +
				"    let iterationCount = 0;\n" +
				"    for (let i = start; i < end; i += step) {\n" +
				"        iterationCount++;\n" +
				"        yield i;\n" +
				"    }\n" +
				"    return iterationCount;\n" +
				"}", // "FunctionDeclaration[generator=true]",
			errors: ["generators are not allowed."]
		},
		{
			code: "async function asyncCall() {}", // "FunctionDeclaration[async=true]",
			errors: ["async functions are not allowed."]
		},
		{
			code: "var add = async function(x) {}", // "FunctionExpression[async=true]",
			errors: ["async functions are not allowed."]
		},
		{
			code: "var add = async () => {}", // "ArrowFunctionExpression[async=true]",
			errors: ["async functions are not allowed."]
		},
		{
			code: "var text = \"\";\n" +
				"var i = 0;\n" +
				"do {\n" +
				"    text += \"The number is \" + i;\n" +
				"    i++;\n" +
				"}\n" +
				"while (i < 5);", // "DoWhileStatement",
			errors: ["do/while statements are not allowed."]
		},
		{
			code: "var person = {firstName:\"John\", lastName:\"Doe\", age:50, eyeColor:\"blue\"};\n" +
				"delete person.age;   // or delete person[\"age\"]; ", // "UnaryExpression[operator='delete']",
			errors: ["'delete' not allowed."]
		},
		{
			code: "var object1 = {a: 1, b: 2, c: 3};\n" +
				"for (var property1 in object1) {\n" +
				"  console.log(property1);\n" +
				"}", // "ForInStatement",
			errors: ["for/in statements are not allowed."]
		},
		{
			code: "var myObj = {1: 'test'}; myObj[0+1];", // "MemberExpression[computed=true]",
			errors: ["computed property names are not allowed."]
		},
		{
			code: "var obj1 = {\n" +
				"  method1() {\n" +
				"    console.log('method 1');\n" +
				"  }\n" +
				"}\n" +
				"\n" +
				"var obj2 = {\n" +
				"  method2() {\n" +
				"   super.method1();\n" +
				"  }\n" +
				"}\n" +
				"\n" +
				"Object.setPrototypeOf(obj2, obj1);\n" +
				"obj2.method2(); // logs \"method 1\"", // "Super",
			errors: ["'super' is not allowed."]
		},
		{
			code: "function Foo() {\n" +
				"  new.target\n" +
				"}", // "MetaProperty",
			errors: ["'MetaProperty' is not allowed."]
		},
		{
			code: "var Rectangle = class {\n" +
				"  constructor() {};" +
				"}\n", // "ClassExpression",
			errors: ["'ClassExpression' is not allowed."]
		},
		{
			code: "eval('2 + 2')", // "CallExpression[callee.name='eval']",
			errors: ["'eval' is not allowed."]
		},
	]
};
