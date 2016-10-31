const PackageJsonUtil = require('../PackageJsonUtil');

const tag = {
  name: 'inline style',
  alternateNames: ['inline CSS'],
  description: 'CSS is added with inline style properties rather than in a separate stylesheet.',
  color: '#B6BBBF',

  match: function matchFunc(seed, packageJson) {
    const packUtil = new PackageJsonUtil(packageJson);

    // TODO Fill out with other inline style libs
    const packageNames = [
      'react-inline-css',
    ];

    return packUtil.hasOneOfTheseDependencies(packageNames);
  },
};
module.exports = tag;
