module.exports = {
  valid: [
    `
      let foo = 0;
      foo += 1;
    `,
    `
      let bar = 42;
      bar -= 1;
      `,
    `
      () => {for (let i = 0; i < l; i += 1) {
        return;
      }};
     `,
  ],
  invalid: [
    {
      code: `
              let foo = 0;
              foo++;
            `,
      errors: ["Unary operator '++' used."],
    },
    {
      code: `
              let bar = 42;
              bar--;
            `,
      errors: ["Unary operator '--' used."],
    },
    {
      code: `
              () => {for (let i = 0; i < l; i++) {
                return;
              }};
            `,
      errors: ["Unary operator '++' used."],
    },
    {
      code: '++x;',
      errors: ["Unary operator '++' used."],
    },
    {
      code: '--y;',
      errors: ["Unary operator '--' used."],
    },
  ],
};
