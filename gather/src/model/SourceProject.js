/**
 * 'Source projects' are objects with minimal details about a GitHub repository.
 * Nothing from the GitHub API has been added to the project yet.
 */
module.exports = class SourceProject {
  /**
   * Accepts an object which must have a 'url' property.
   * There are also other optional properties.
   * For examples see: data/source/react-starter-projects.js
   */
  constructor(obj) {
    this.url = obj.url;
    this.tags = obj.tags || [];
    this.fetchPackageJson = obj.fetchPackageJson || false;
    this.packagePaths = obj.packagePaths || [`package.json`];

    this.githubPath = this.url.replace(`https://github.com/`, ``);
    this.owner = this.githubPath.split(`/`)[0];
    this.repo = this.githubPath.split(`/`)[1];
  }
};
