module.exports = {
  valid: [
    `
    if (foo) {
      foo+=1;
      }
    `,
    `
    while (bar) {
      baz();
    }
    `,
    `
    if (foo) {
      baz();
    } else {
      qux();
    }
    `,
    `
    switch (false) {
      case true: {
        let x = 'bar';
        console.log(x);
        break;
      }
      case false: {
        let x = 'baz';
        console.log(x);
        break;
      }
    }
    `,
  ],
  invalid: [
    {
      code: 'if (foo) foo+=1;',
      errors: ["Expected { after 'if' condition."],
    },
    {
      code: `
        while (bar)
          baz();
       `,
      errors: ["Expected { after 'while' condition."],
    },
    {
      code: `
        if (foo) {
          baz();
        } else qux();
      `,
      errors: ["Expected { after 'else'."],
    },
    // {
    //   code: `switch (false) {
    //         case true:
    //           let x = 'bar';
    //           console.log(x);
    //           break;
    //     }`,
    //   errors: ["Expected { after 'true:'."],
    // },
  ],
};
