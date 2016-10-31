module.exports = class Repository {
  /**
   * Accepts either a string representing the github URL or an object
   * with 'url' and 'packageJson' properties.
   */
  constructor(obj) {
    this.packagePaths = ['package.json'];
    this.additionalTags = [];
    this.nonTags = [];

    if (typeof obj === 'string') {
      this.url = obj;
    } else {
      this.url = obj.url;
      if (obj.packagePaths) {
        this.packagePaths = obj.packagePaths;
      }
      if (obj.additionalTags) {
        this.additionalTags = obj.additionalTags;
      }
      if (obj.nonTags) {
        this.nonTags = obj.nonTags;
      }
    }
  }

  githubPath() {
    return this.url.replace('https://github.com/', '');
  }

  // TODO: Change to 'owner'
  userName() {
    return this.githubPath().split('/')[0];
  }

  repoName() {
    return this.githubPath().split('/')[1];
  }

  buildBlob() {
    const obj = {
      githubUrl: this.url,
      githubPath: this.githubPath(),
      githubUserName: this.userName(),
      githubRepoName: this.repoName(),
    };
    return obj;
  }
};
