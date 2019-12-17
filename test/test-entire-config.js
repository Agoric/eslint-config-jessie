const configTester = require('eslint-config-rule-tester');
const path = require('path');

const jessieConfig = require('../index');

console.log(jessieConfig);

// iterate through all the tests
Object.keys(jessieConfig.rules).forEach(rule => {
  // eslint-disable-next-line global-require
  const test = require(path.resolve(__dirname, './rules/', rule)); // eslint-disable-line import/no-dynamic-require
  configTester(rule, jessieConfig, test);
});
