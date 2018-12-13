module.exports = {
  valid: [
    'var name = "ESLint";',
    `
      object.method = function() {
          // ...
      };
    `,
  ],
  invalid: [
    {
      code: "var name = 'ESLint'",
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
