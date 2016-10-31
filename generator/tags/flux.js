const PackageJsonUtil = require('../PackageJsonUtil');

const tag = {
  name: 'Flux',
  description: 'Some variant of Flux is used (not Redux).',
  color: '#EB5A46',

  match: function matchFunc(seed, packageJson) {
    const packUtil = new PackageJsonUtil(packageJson);

    // TODO: Fill out this flux list
    const fluxPackageNames = [
      'flux',
      'reflux',
      'alt',
      'alt.js',
      'flummox',
      'martyjs',
      'miniflux',
    ];

    return packUtil.hasOneOfTheseDependencies(fluxPackageNames);
  },
};
module.exports = tag;
