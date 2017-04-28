module.exports = {
  name: 'Webpack 2',
  alternateNames: ['webpack2'],
  description: 'Webpack 2 was released in Jan 2017 and includes some breaking changes.',
  color: '#4D94FF',

  match: function matchFunc(seed, packageJson) {
    const dependencies = Object.assign({}, packageJson.dependencies, packageJson.devDependencies);
    const webpackVersionRange = dependencies.webpack;
    if (!webpackVersionRange) {
      return false;
    }
    // Get the first digit
    const webpackMajorVersion = webpackVersionRange.match(/[0-9]/)[0];
    if (!webpackMajorVersion) {
      return false;
    }
    return webpackMajorVersion === '2';
  },
};
