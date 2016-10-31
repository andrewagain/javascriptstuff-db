const PackageJsonUtil = require('../PackageJsonUtil');

const tag = {
  name: 'react native',
  color: '#0BA5D1',

  match: function matchFunc(seed, packageJson) {
    const packUtil = new PackageJsonUtil(packageJson);
    return packUtil.hasDependency('react-native');
  },
};
module.exports = tag;
