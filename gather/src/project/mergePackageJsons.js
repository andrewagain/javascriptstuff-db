/**
 * This is a bit of a hack, but when there is more than one package.json, I
 * just use the first one, but add the dependencies of the other ones into the
 * first one.
 */
module.exports = function mergePackageJsons(packageJsons) {
  if (packageJsons.length < 1) {
    return {};
  }
  if (packageJsons.length === 1) {
    return packageJsons[0];
  }

  // Copy all dev & regular dependencies from secondary PJs into primary PJ
  const packageJson = packageJsons[0];
  packageJsons.forEach(pj => {
    if (pj.dependencies) {
      Object.keys(pj.dependencies).forEach(depName => {
        packageJson.dependencies[depName] = pj.dependencies[depName];
      });
    }
    if (pj.devDependencies) {
      Object.keys(pj.devDependencies).forEach(depName => {
        packageJson.devDependencies[depName] = pj.devDependencies[depName];
      });
    }
  });

  return packageJson;
};
