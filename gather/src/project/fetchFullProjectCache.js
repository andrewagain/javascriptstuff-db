const fse = require(`fs-extra`);
const path = require(`path`);
const colors = require(`colors/safe`);

const fetchFullProject = require(`./fetchFullProject`);
const FullProject = require(`../model/FullProject`);
const paths = require(`../util/paths`);

/**
 * Check the cache for the given github path.
 * If the cache is not intended to be used or the file is not found, resolves to null.
 * Never resolves to an error.
 */
function checkCache(cache, cacheFilePath) {
  return new Promise(resolve => {
    if (!cache) {
      resolve(null);
      return;
    }

    fse.readJson(cacheFilePath, (err, obj) => {
      if (err) {
        resolve(null);
        return;
      }
      resolve(obj);
    });
  });
}

/**
 * Fetch a full project and save it to the data/.cache directory.
 * If cache == false, the project will be fetched no matter what.
 * If cache == true, the project will be fetched from the cache if it exists there.
 * Either way the project will be saved to the cache.
 * @param  {Object}  githubClient
 * @param  {Object}  sourceProject
 * @param  {Boolean} [cache=true]
 * @param  {Number}  [index=0]
 * @param  {Number}  [total=1]
 * @return {Promise}
 */
module.exports = function fetchFullProjectCache(
  githubClient,
  sourceProject,
  cache,
  index = 0,
  total = 1
) {
  const cacheFilePath = path.join(
    paths.dataCache,
    `${sourceProject.githubPath}.json`
  );
  return checkCache(cache, cacheFilePath).then(cacheObject => {
    if (cacheObject) {
      console.log(
        `${colors.gray(
          `[${index + 1}/${total}]`
        )} ${sourceProject.githubPath} ${colors.gray(`(cache)`)}`
      );
      // Update the cached object with the latest source project in case it changed
      cacheObject.sourceProject = sourceProject;
      return FullProject.fromJavaScriptObject(cacheObject);
    }
    return fetchFullProject(
      githubClient,
      sourceProject,
      index,
      total
    ).then(fullProject => {
      fse.outputJson(cacheFilePath, fullProject.toJavaScriptObject());
      return fullProject;
    });
  });
};
