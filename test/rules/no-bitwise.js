module.exports = {
  valid: [
    'let x = y || z;',
    'let x = y && z;',
    'let x = y > z;',
    'let x = y < z;',
    'x += y;',
  ],
  invalid: [
    {
      code: 'let x = y | z;',
      errors: ["Unexpected use of '|'."],
    },
    {
      code: 'let x = y & z;',
      errors: ["Unexpected use of '&'."],
    },
    {
      code: 'let x = y ^ z;',
      errors: ["Unexpected use of '^'."],
    },
    {
      code: 'let x = ~ z;',
      errors: ["Unexpected use of '~'."],
    },
    {
      code: 'let x = y << z;',
      errors: ["Unexpected use of '<<'."],
    },
    {
      code: 'let x = y >> z;',
      errors: ["Unexpected use of '>>'."],
    },
    {
      code: 'let x = y >>> z;',
      errors: ["Unexpected use of '>>>'."],
    },
    {
      code: 'x |= y;',
      errors: ["Unexpected use of '|='."],
    },
    {
      code: 'x &= y;',
      errors: ["Unexpected use of '&='."],
    },
    {
      code: 'x ^= y;',
      errors: ["Unexpected use of '^='."],
    },
    {
      code: 'x <<= y;',
      errors: ["Unexpected use of '<<='."],
    },
    {
      code: 'x >>= y;',
      errors: ["Unexpected use of '>>='."],
    },
    {
      code: 'x >>>= y;',
      errors: ["Unexpected use of '>>>='."],
    },
  ],
};
