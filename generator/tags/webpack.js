const PackageJsonUtil = require('../PackageJsonUtil');

module.exports = {
  name: 'webpack',
  description: 'Webpack is a module bundler.',
  color: '#A8C4EE',

  match: function matchFunc(seed, packageJson) {
    const packUtil = new PackageJsonUtil(packageJson);
    return packUtil.hasDependency('webpack');
  },
};
