const async = require(`async`);
const colors = require(`colors/safe`);

const fetchPackageJsons = require(`./fetchPackageJsons`);
const mergePackageJsons = require(`./mergePackageJsons`);
const FullProject = require(`../model/FullProject`);

function createFullProject(githubClient, sourceProject, outerCallback) {
  // console.log('Growing repo:', repo.url);
  if (!sourceProject || !sourceProject.url) {
    throw new Error(`sourceProject is null`);
  }

  function repoDataTask(callback) {
    githubClient.repos.get(
      {
        owner: sourceProject.owner,
        repo: sourceProject.repo
      },
      callback
    );
  }

  function readmeTask(callback) {
    githubClient.repos.getReadme(
      {
        owner: sourceProject.owner,
        repo: sourceProject.repo
      },
      (error, response) => {
        if (error || !response || !response.data || !response.data.content) {
          console.log(
            `Error fetching readme for ${sourceProject.githubPath}: ${error}`
          );
          callback(error);
          return;
        }
        if (response.data.encoding !== `base64`) {
          callback(
            new Error(
              `Unexpected encoding for readme: "${response.data.encoding}"`
            )
          );
          return;
        }
        const str = Buffer.from(response.data.content, `base64`).toString();
        callback(null, str);
      }
    );
  }

  function packageJsonTask(callback) {
    fetchPackageJsons(
      sourceProject.githubPath,
      sourceProject.packagePaths,
      (error, packageJsons) => {
        if (error) {
          callback(error, null);
          return;
        }
        callback(null, mergePackageJsons(packageJsons));
      }
    );
  }

  const tasks = [repoDataTask, readmeTask];
  if (sourceProject.fetchPackageJson) {
    tasks.push(packageJsonTask);
  }

  async.parallel(tasks, (error, results) => {
    if (error) {
      outerCallback(error, null);
      return;
    }

    const githubData = results[0];
    const readmeStr = results[1];
    const packageJson = results[2];
    if (sourceProject.fetchPackageJson && !packageJson) {
      outerCallback(
        new Error(
          `No package.json found for source project: ${sourceProject.url}`
        ),
        null
      );
      return;
    }

    const fullProject = new FullProject(
      sourceProject,
      packageJson,
      githubData,
      readmeStr
    );
    outerCallback(null, fullProject);
  });
}

/**
 * Attempt to fetch all the data for this project a few times before giving up.
 */
function fetchRetry(githubClient, sourceProject, index, total, cb) {
  const logPrefix = `${colors.gray(
    `[${index + 1}/${total}]`
  )} ${sourceProject.githubPath}`;
  let attemptNumber = 0;
  async.retry(
    3,
    taskCallback => {
      attemptNumber += 1;
      createFullProject(githubClient, sourceProject, (error, value) => {
        if (error) {
          console.log(`${logPrefix} Attempt #${attemptNumber} failure:`, error);
        } else {
          console.log(logPrefix);
        }
        taskCallback(error, value);
      });
    },
    cb
  );
}

/**
 * Given a 'source project', expand it into a 'full project'.
 * Downloads data from the GitHub API to create the full project.
 * Does NOT assign tags because those vary per category.
 *
 * @param  {Object} githubClient
 * @param  {SourceProject} sourceProject
 * @param  {Number} index
 * @param  {Number} total
 * @return {Promise} resolves to a full project
 */
module.exports = function fetchFullProject(
  githubClient,
  sourceProject,
  index = 0,
  total = 1
) {
  return new Promise((resolve, reject) => {
    fetchRetry(
      githubClient,
      sourceProject,
      index,
      total,
      (error, fullProject) => {
        if (error) {
          reject(error);
        } else {
          resolve(fullProject);
        }
      }
    );
  });
};
