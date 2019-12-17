const path = require('path');
const configTester = require('eslint-config-rule-tester');

const jessieConfig = require('../index');

// we want to iterate over the rules and bring in their matching tests
Object.keys(jessieConfig.rules).forEach(key => {
  const partialConfig = { ...jessieConfig };
  partialConfig.rules = {};
  partialConfig.rules[key] = jessieConfig.rules[key];
  // eslint-disable-next-line global-require
  const test = require(path.resolve(__dirname, './rules/', key)); // eslint-disable-line import/no-dynamic-require
  configTester(key, partialConfig, test);
});
