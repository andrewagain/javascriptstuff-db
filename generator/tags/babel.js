const PackageJsonUtil = require('../PackageJsonUtil');

const tag = {
  name: 'babel',
  description: 'Babel transpiles JavaScript.',
  color: '#F5DA55',

  match: function matchFunc(seed, packageJson) {
    const packUtil = new PackageJsonUtil(packageJson);
    return packUtil.hasOneOfTheseDependencies([
      'babel',
      'babel-core',
    ]);
  },
};
module.exports = tag;
