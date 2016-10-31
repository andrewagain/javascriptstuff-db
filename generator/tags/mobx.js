const PackageJsonUtil = require('../PackageJsonUtil');

const tag = {
  name: 'MobX',
  description: 'MobX is used in this project (not Flux).',
  color: '#EC681A',

  match: function matchFunc(seed, packageJson) {
    const packUtil = new PackageJsonUtil(packageJson);

    const packageNames = [
      'mobx',
    ];

    return packUtil.hasOneOfTheseDependencies(packageNames);
  },
};
module.exports = tag;
