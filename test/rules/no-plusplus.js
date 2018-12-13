module.exports = {
  valid: [
    'var foo = 0;\n' + 'foo += 1;',
    'var bar = 42;\n' + 'bar -= 1;',
    '() => {for (i = 0; i < l; i += 1) {\n' + '    return;\n' + '}}',
  ],
  invalid: [
    {
      code: 'var foo = 0;\n' + 'foo++;',
      errors: ["Unary operator '++' used."],
    },
    {
      code: 'var bar = 42;\n' + 'bar--;',
      errors: ["Unary operator '--' used."],
    },
    {
      code: '() => {for (i = 0; i < l; i++) {\n' + '    return;\n' + '}}',
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
