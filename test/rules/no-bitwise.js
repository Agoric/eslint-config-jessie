module.exports = {
  valid: [
    'var x = y || z;',
    'var x = y && z;',
    'var x = y > z;',
    'var x = y < z;',
    'x += y;',
  ],
  invalid: [
    {
      code: 'var x = y | z;',
      errors: ["Unexpected use of '|'."],
    },
    {
      code: 'var x = y & z;',
      errors: ["Unexpected use of '&'."],
    },
    {
      code: 'var x = y ^ z;',
      errors: ["Unexpected use of '^'."],
    },
    {
      code: 'var x = ~ z;',
      errors: ["Unexpected use of '~'."],
    },
    {
      code: 'var x = y << z;',
      errors: ["Unexpected use of '<<'."],
    },
    {
      code: 'var x = y >> z;',
      errors: ["Unexpected use of '>>'."],
    },
    {
      code: 'var x = y >>> z;',
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
