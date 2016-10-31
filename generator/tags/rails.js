const PackageJsonUtil = require('../PackageJsonUtil');

const tag = {
  name: 'rails',
  color: '#C377E0',

  match: function matchFunc(seed, packageJson) {
    const packUtil = new PackageJsonUtil(packageJson);
    return packUtil.hasDependency('react-rails');
  },
};
module.exports = tag;
