const PackageJsonUtil = require('../PackageJsonUtil');

const tag = {
  name: 'CoffeeScript',
  alternateNames: ['coffee', 'coffee script'],
  description: 'CoffeeScript is a little language that compiles into JavaScript',
  color: '#4D4D4D',

  match: function matchFunc(seed, packageJson) {
    const packUtil = new PackageJsonUtil(packageJson);
    return packUtil.hasOneOfTheseDependencies(['coffee-loader', 'coffee-script']);
  },
};
module.exports = tag;
