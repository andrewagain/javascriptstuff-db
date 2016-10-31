const PackageJsonUtil = require('../PackageJsonUtil');

const tag = {
  name: 'es6',
  alternateNames: ['esnext', 'es6+', 'es7', 'es2015', 'es2016', 'transpiled'],
  description: 'Uses transpiling to convert JavaScript with the latest language features into well-supported (ES5) code',
  color: '#08C2E0',

  match: function matchFunc(seed, packageJson) {
    const packUtil = new PackageJsonUtil(packageJson);

    // Projects with coffeescript are automatically considered to NOT be using ES6
    const hasCoffee = packUtil.hasOneOfTheseDependencies(['coffee-loader', 'coffee-script']);
    if (hasCoffee) {
      return false;
    }

    const packageNames = [
      'babel',
      'babel-core',
      'babel-loader',
      'babel-preset-react',
      'babel-preset-es2015',
      'babelify',
      'babel-jest',
    ];

    return packUtil.hasOneOfTheseDependencies(packageNames);
  },
};
module.exports = tag;
