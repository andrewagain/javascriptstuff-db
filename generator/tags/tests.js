const PackageJsonUtil = require('../PackageJsonUtil');

const tag = {
  name: 'tests',
  alternateNames: ['test', 'unit test'],
  description: 'The project has same framework set up for testing.',
  color: '#52E898',

  match: function matchFunc(seed, packageJson) {
    const packUtil = new PackageJsonUtil(packageJson);

    const packageNames = [
      'jest',
      'jest-cli',
      'mocha',
      'jasmine',
      'karma',
    ];

    return packUtil.hasOneOfTheseDependencies(packageNames);
  },
};
module.exports = tag;
