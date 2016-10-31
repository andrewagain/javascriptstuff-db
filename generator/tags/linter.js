const PackageJsonUtil = require('../PackageJsonUtil');

const tag = {
  name: 'linter',
  alternateNames: ['lint'],
  description: 'Linters are used to catch errors and coding style issues early.',
  color: '#61BD4F',

  match: function matchFunc(seed, packageJson) {
    const packUtil = new PackageJsonUtil(packageJson);

    const packageNames = [
      'eslint',
      'jshint',
      'jscs',
      'eslint-plugin-react',
      'gulp-eslint',
      'babel-eslint',
    ];

    return packUtil.hasOneOfTheseDependencies(packageNames);
  },
};
module.exports = tag;
