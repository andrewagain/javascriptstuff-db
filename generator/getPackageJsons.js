const async = require('async');
const request = require('request');

/**
 * Fetch the package.json.
 *
 * @param  {String}   packageJsonUrl   full URL of package.json to fetch
 * @param  {Function} callback         signature: (error:Error, packageJson:Object)
 */
function getPackageJson(packageJsonUrl, callback) {
  request(packageJsonUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const parsed = JSON.parse(body);
      callback(null, parsed);
      return;
    }
    callback(error, null);
  });
}


/**
 * Given a github URL and an array of package.json paths, fetch them all
 * and return them as an array.
 * @param  {String}   githubRepoPath   username/repo name
 * @param  {String[]} packageJsonPaths array of paths to package.json - no leading slash
 */
module.exports = function getPackageJsons(githubRepoPath, packageJsonPaths, callback) {
  const packageUrls = packageJsonPaths.map(packageJsonPath =>
    `https://raw.githubusercontent.com/${githubRepoPath}/master/${packageJsonPath}`
  );

  async.map(packageUrls, getPackageJson, callback);
};
