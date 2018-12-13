module.exports = {
  valid: ['var regex1 = /\\w+/;'],
  invalid: [
    {
      code: "var regex2 = new RegExp('\\\\w+');",
      errors: ["Unexpected use of 'RegExp'."],
    },
    {
      code: "var date1 = new Date('December 17, 1995 03:24:00');",
      errors: ["Unexpected use of 'Date'."],
    },
  ],
};
