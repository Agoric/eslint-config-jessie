// not currently tested

module.exports = {
  valid: ['const foo = (a, b) => { a + b; };'],

  invalid: [
    {
      code: 'function Foo() { this.a = 0; };',
      errors: ["Unexpected 'this' statement."],
    },
  ],
};
