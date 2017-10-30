const get = require(`lodash/get`);

/**
 * Given a package json, return an array of dependencies.
 * Returns a combination of devDependencies and dependencies.
 * @param  {Object} packageJson
 * @return {String[]}
 */
module.exports = function getDependencyNames(packageJson) {
  if (!packageJson) {
    return null;
  }
  const dependencyNames = Object.keys(get(packageJson, `dependencies`, {}));
  const devDependencyNames = Object.keys(
    get(packageJson, `devDependencies`, {})
  );
  const allNames = dependencyNames.concat(devDependencyNames);
  allNames.sort();
  return allNames;
};
