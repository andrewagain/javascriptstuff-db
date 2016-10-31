const PackageJsonUtil = require('../PackageJsonUtil');

const tag = {
  name: 'minimal',
  alternateNames: ['simple'],
  description: 'A project is considered \'minimal\' if it has fewer than 20 dependencies.',
  color: '#999999',

  match: function matchFunc(seed, packageJson) {
    const packUtil = new PackageJsonUtil(packageJson);
    return packUtil.totalDependencyCount() < 20;
  },
};
module.exports = tag;
