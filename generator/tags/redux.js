const PackageJsonUtil = require('../PackageJsonUtil');

const tag = {
  name: 'redux',
  description: 'Redux is used in this project (not Flux).',
  color: '#EB5A46',

  match: function matchFunc(seed, packageJson) {
    const packUtil = new PackageJsonUtil(packageJson);

    const packageNames = [
      'redux',
    ];

    return packUtil.hasOneOfTheseDependencies(packageNames);
  },
};
module.exports = tag;
