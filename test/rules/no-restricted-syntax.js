module.exports = {
  valid: [
    'for (let i = 0; i < 5; i = i+1) { console.log(i); }', // for/in
  ],
  invalid: [
    {
      code: 'let person = {}; for (x in person) { console.log(x); }', // for/in
      errors: ['for/in statements are not allowed.'],
    },
    {
      code: `
          let car = {make: 'Honda', model: 'Accord', year: 1998};
          'make' in car;
        `, // "BinaryExpression[operator='in']"
      errors: ["'in' is not allowed."],
    },
    {
      code: 'function Foo() { this.a = 0; };', // "ThisExpression"
      errors: ["'this' not allowed."],
    },
    {
      code: "'' instanceof String;", // "BinaryExpression[operator='instanceof']",
      errors: ["'instanceof' is not allowed."],
    },
    {
      code: "let rand = new Person('Rand McNally', 33, 'M');", // "NewExpression",
      errors: ["'new' is not allowed."],
    },
    {
      code: `
          function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
            let iterationCount = 0;
              for (let i = start; i < end; i += step) {
                iterationCount += 1;
                yield i;
            }
            return iterationCount;
          }
        `, // "FunctionDeclaration[generator=true]",
      errors: ['generators are not allowed.'],
    },
    {
      code: `
          async function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
            let iterationCount = 0;
              for (let i = start; i < end; i += step) {
                iterationCount += 1;
                yield i;
            }
            return iterationCount;
          }
        `, // "FunctionDeclaration[generator=true]",
      errors: ['async functions are not allowed.', 'generators are not allowed.'],
    },
    {
      code: 'async function asyncCall() {};', // "FunctionDeclaration[async=true]",
      errors: ['async functions are not allowed.'],
    },
    {
      code: 'let add = async function(x) {};', // "FunctionExpression[async=true]",
      errors: ['async functions are not allowed.'],
    },
    {
      code: 'let add = async () => {};', // "ArrowFunctionExpression[async=true]",
      errors: ['async functions are not allowed.'],
    },
    {
      code: `
          let text = "";
          let i = 0;
          do {
            text += "The number is " + i;
            i=i+1;
          }
          while (i < 5);
        `, // "DoWhileStatement",
      errors: ['do/while statements are not allowed.'],
    },
    {
      code: `
          let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
          delete person.age;
        `, // "UnaryExpression[operator='delete']",
      errors: ["'delete' not allowed."],
    },
    {
      code: `
          let object1 = {a: 1, b: 2, c: 3};
          for (let property1 in object1) {
            console.log(property1);
          }
        `, // "ForInStatement",
      errors: ['for/in statements are not allowed.'],
    },
    {
      code: "let myObj = {1: 'test'}; myObj[0+1];", // "MemberExpression[computed=true]",
      errors: ['computed property names are not allowed.'],
    },
    {
      code: `
          let obj1 = {
            method1() {
              console.log('method 1');
            }
          };
     
          let obj2 = {
            method2() {
              super.method1();
            }
          };
    
          Object.setPrototypeOf(obj2, obj1);
          obj2.method2();
        `, // "Super"
      errors: ["'super' is not allowed."],
    },
    {
      code: `
          function Foo() {
            new.target;
          };
        `, // "MetaProperty",
      errors: ["'MetaProperty' is not allowed."],
    },
    {
      code: `
              let Rectangle = class {
                constructor() {};
              };
            `, // "ClassExpression",
      errors: ["'ClassExpression' is not allowed."],
    },
    {
      code: "eval('2 + 2');", // "CallExpression[callee.name='eval']",
      errors: ["'eval' is not allowed."],
    },
    {
      code: 'let regex1 = /\\w+/;', // "Literal[regex='true']",
      errors: ['regexp literal syntax is not allowed.'],
    },
  ],
};
