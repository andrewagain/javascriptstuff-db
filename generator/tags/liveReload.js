const PackageJsonUtil = require('../PackageJsonUtil');
const hmrTag = require('./hmr');

const tag = {
  name: 'live reload',
  alternateNames: ['auto reload', 'browser reload'],
  description: 'Automatic browser refresh whenever the developer makes code changes in the text editor.',
  color: '#FF80CE',

  match: function matchFunc(seed, packageJson) {
    // I consider HMR to be a type of live reload. Therefore, if the package has
    // HMR, it also has live reload. (But not the other way around).
    if (hmrTag.match(seed, packageJson)) {
      return true;
    }

    const packUtil = new PackageJsonUtil(packageJson);

    const packageNames = [
      'BrowserSync',
      'piping',
    ];

    return packUtil.hasOneOfTheseDependencies(packageNames);
  },
};
module.exports = tag;
