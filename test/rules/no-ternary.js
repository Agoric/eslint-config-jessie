module.exports = {
  valid: [
    `
      var foo;
      if (isBar) {
        foo = baz;
      } else {
        foo = qux;
      }
  
      function quux() {
        if (foo) {
          return bar();
        } else {
          return baz();
        }
      }
    `,
  ],
  invalid: [
    {
      code: 'var foo = isBar ? baz : qux;',
      errors: ['Ternary operator used.'],
    },
    {
      code: `
          function quux() {
            return foo ? bar() : baz();
          }
       `,
      errors: ['Ternary operator used.'],
    },
  ],
};
