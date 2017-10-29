const getDependencyNames = require(`../project/getDependencyNames`);

function fixHomePage(homepage) {
  if (!homepage || homepage.length === 0) {
    return homepage;
  }
  if (!homepage.indexOf("http") !== 0) {
    return `http://${homepage}`;
  }
  return homepage;
}

/**
 * 'Full projects' are objects with tons of info about a GitHub repository.
 * This includes data from a 'source project' and data from the GitHub API.
 */
module.exports = class FullProject {
  constructor(sourceProject, packageJson, githubData, readme) {
    this.sourceProject = sourceProject;
    this.packageJson = packageJson;
    this.githubData = githubData;
    this.readme = readme;

    this.url = sourceProject.url;

    this.githubPath = this.url.replace(`https://github.com/`, ``);
    this.owner = this.githubPath.split(`/`)[0];
    this.repo = this.githubPath.split(`/`)[1];

    this.starCount = githubData.data.stargazers_count;
    this.description = githubData.data.description;
    this.homepage = fixHomePage(githubData.data.homepage);
    this.updatedAt = githubData.data.updated_at;
    this.createdAt = githubData.data.created_at;
    this.pushedAt = githubData.data.pushed_at;
    this.avatarUrl = githubData.data.owner.avatar_url;

    // 'dependencies' is a list of all dependency names
    this.dependencies = getDependencyNames(packageJson);

    // these tags will be the ones that have been manually assigned
    // additional tags will be added later for tags that have the automatic 'match()' function
    this.tags = sourceProject.tags || [];
  }

  /**
   * Return a json-friendly subset of the available data for this project.
   * Exclude large and unstable properties.
   *   - Large properties are ones that would add too much download time on the web, like the
   *     full package JSON and the readme.
   *   - Unstable properties are those that change frequently like last update time and star count.
   */
  stableObject() {
    return {
      githubPath: this.githubPath,
      description: this.description,
      homepage: this.homepage,
      dependencies: this.dependencies,
      tags: this.tags,
      lastStarCount: this.starCount,
      lastUpdatedAt: this.updatedAt,
      avatarUrl: this.avatarUrl
    };
  }

  /**
   * Convert to a plain JavaScript object so that it can be saved to JSON.
   * @return {Object}
   */
  toJavaScriptObject() {
    return {
      sourceProject: this.sourceProject,
      packageJson: this.packageJson,
      githubData: this.githubData,
      readme: this.readme
    };
  }

  /**
   * Create a FullProject object from a plain JavaScript object.
   * @param  {Object} object
   * @return {FullProject}
   */
  static fromJavaScriptObject(object) {
    return new FullProject(
      object.sourceProject,
      object.packageJson,
      object.githubData,
      object.readme
    );
  }
};
