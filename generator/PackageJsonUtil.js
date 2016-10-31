module.exports = class PackageJsonUtil {
  constructor(packageJson) {
    this.packageJson = packageJson;
  }

  dependencies() {
    if (!this.packageJson.dependencies) {
      return [];
    }
    return Object.keys(this.packageJson.dependencies);
  }

  devDependencies() {
    if (!this.packageJson.devDependencies) {
      return [];
    }
    return Object.keys(this.packageJson.devDependencies);
  }

  allDependencies() {
    return this.dependencies().concat(this.devDependencies());
  }

  totalDependencyCount() {
    return this.allDependencies().length;
  }

  hasDependency(depName) {
    return this.allDependencies().includes(depName);
  }

  hasOneOfTheseDependencies(depNames) {
    let hasOne = false;
    depNames.forEach((depName) => {
      if (this.hasDependency(depName)) {
        hasOne = true;
      }
    });
    return hasOne;
  }
};
