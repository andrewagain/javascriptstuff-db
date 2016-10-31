const PackageJsonUtil = require('../PackageJsonUtil');

const tag = {
  name: 'CSS Modules',
  alternateNames: ['CSS Modules', 'css-modules'],
  description: 'A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.',
  color: '#E852B7',

  match: function matchFunc(seed, packageJson, githubData, readmeStr) {
    const packUtil = new PackageJsonUtil(packageJson);

    // Check for a CSS modules package.
    const packageNames = [
      'css-modules-require-hook',
      'css-modules',
    ];
    if (packUtil.hasOneOfTheseDependencies(packageNames)) {
      return true;
    }

    // CSS modules can be used without a CSS module package. Check the description.
    const description = githubData.description;
    if (description && description.match(/css-modules/i)) {
      return true;
    }
    if (description && description.match(/CSS Modules/i)) {
      return true;
    }

    // also check the README
    if (readmeStr.match(/css-modules/i)) {
      return true;
    }
    if (readmeStr.match(/CSS Modules/i)) {
      return true;
    }

    return false;
  },
};
module.exports = tag;
