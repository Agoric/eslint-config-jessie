module.exports = {
  valid: [
    'let name = "ESLint";',
    `
      object.method = function() {
          // ...
      };
    `,
  ],
  invalid: [
    {
      code: "let name = 'ESLint'",
      errors: ['Missing semicolon.'],
    },
    {
      code: `
          object.method = function() {
              // ...
          }
        `,
      errors: ['Missing semicolon.'],
    },
  ],
};
