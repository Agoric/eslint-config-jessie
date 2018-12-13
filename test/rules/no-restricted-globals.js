module.exports = {
  valid: [],
  invalid: [
    {
      code: 'let flags = RegExp.prototype.flags;',
      errors: ["Unexpected use of 'RegExp'."],
    },
    {
      code: 'let date1 = Date.now();',
      errors: ["Unexpected use of 'Date'."],
    },
  ],
};
