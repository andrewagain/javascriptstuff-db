const PackageJsonUtil = require('../PackageJsonUtil');

const tag = {
  name: 'react-router',
  alternateNames: ['router'],
  description: 'Uses react-router to keep the UI in sync with the URL.',
  color: '#D180FF',

  match: function matchFunc(seed, packageJson) {
    const packUtil = new PackageJsonUtil(packageJson);
    return packUtil.hasDependency('react-router');
  },
};
module.exports = tag;
