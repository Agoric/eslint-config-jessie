module.exports = {
  valid: [
    'a === b',
    'a !== a',
    'foo === true',
    'bananas !== 1',
    'value === undefined',
    "typeof foo === 'undefined'",
    "'hello' !== 'world'",
    '0 === 0',
    'true === true',
    'foo === null',
  ],
  invalid: [
    {
      code: 'if ("" == text) { }',
      errors: ["Expected '===' and instead saw '=='."],
    },
    {
      code: 'if (x == 42) { }',
      errors: ["Expected '===' and instead saw '=='."],
    },
    {
      code: 'if (obj.getStuff() != undefined) { }',
      errors: ["Expected '!==' and instead saw '!='."],
    },
  ],
};
