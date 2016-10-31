const PackageJsonUtil = require('../PackageJsonUtil');

const tag = {
  name: 'TypeScript',
  description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  color: '#eeeeee',

  match: function matchFunc(seed, packageJson) {
    const packUtil = new PackageJsonUtil(packageJson);

    const packageNames = [
      'typescript',
    ];

    return packUtil.hasOneOfTheseDependencies(packageNames);
  },
};
module.exports = tag;
