const PackageJsonUtil = require('../PackageJsonUtil');

/**
 * Returns true if the npm 'start' script contains '--hot'.
 * @param  {Object}  packageJson
 * @return {Boolean}
 */
function hasHotStartScript(packageJson) {
  if (!packageJson) {
    return false;
  }
  if (!packageJson.scripts) {
    return false;
  }
  if (!packageJson.scripts.start) {
    return false;
  }
  return packageJson.scripts.start.indexOf('--hot') > -1;
}

const tag = {
  name: 'hmr',
  alternateNames: ['hot', 'hot module reloading'],
  description: 'Supports updating JavaScript in the browser without a refresh.',
  color: '#FFAB4A',

  match: function matchFunc(seed, packageJson) {
    const packUtil = new PackageJsonUtil(packageJson);

    const packageNames = [
      'react-hot-loader',
      'react-transform-hmr',
      'webpack-hot-middleware',
      'livereactload', // hot reload for browserify
    ];

    // definitely supports HMR if it has one of the hot packages
    const hasHotPackage = packUtil.hasOneOfTheseDependencies(packageNames);
    if (hasHotPackage) {
      return true;
    }

    // 'react-boilerplate' supports HMR by specifying '--hot' in the start script
    // https://github.com/rbartoli/react-boilerplate
    return hasHotStartScript(packageJson);
  },
};
module.exports = tag;
