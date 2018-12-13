module.exports = {
  valid: [
    `
      var foo = 0;
      foo += 1;
    `,
    `
      var bar = 42;
      bar -= 1;
      `,
    `
      () => {for (i = 0; i < l; i += 1) {
        return;
      }}
     `,
  ],
  invalid: [
    {
      code: `
              var foo = 0;
              foo++;
            `,
      errors: ["Unary operator '++' used."],
    },
    {
      code: `
              var bar = 42;
              bar--;
            `,
      errors: ["Unary operator '--' used."],
    },
    {
      code: `
              () => {for (i = 0; i < l; i++) {
                return;
              }}
            `,
      errors: ["Unary operator '++' used."],
    },
    {
      code: '++x',
      errors: ["Unary operator '++' used."],
    },
    {
      code: '--y',
      errors: ["Unary operator '--' used."],
    },
  ],
};
