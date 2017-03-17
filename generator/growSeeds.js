const async = require('async');
const GithubApi = require('github');

const tagMatcher = require('./tagMatcher');
const getPackageJsons = require('./getPackageJsons');
const Repository = require('./Repository');
const PackageJsonUtil = require('./PackageJsonUtil');
const starterProjectUrls = require('./starterProjectUrls');

/**
 * This is a bit of a hack, but when there is more than one package.json, I
 * just use the first one, but add the dependencies of the 2nd one into the
 * first one.
 */
function mergePackageJsons(packageJsons) {
  if (packageJsons.length < 1) {
    return {};
  }
  if (packageJsons.length === 1) {
    return packageJsons[0];
  }

  // Copy all dev & regular dependencies from secondary PJs into primary PJ
  const packageJson = packageJsons[0];
  packageJsons.forEach((pj) => {
    if (pj.dependencies) {
      Object.keys(pj.dependencies).forEach((depName) => {
        packageJson.dependencies[depName] = pj.dependencies[depName];
      });
    }
    if (pj.devDependencies) {
      Object.keys(pj.devDependencies).forEach((depName) => {
        packageJson.devDependencies[depName] = pj.devDependencies[depName];
      });
    }
  });

  return packageJson;
}

function growSeed(github, repo, outerCallback) {
  // console.log('Growing repo:', repo.url);
  if (!repo || !repo.url) {
    throw new Error('repo is null');
  }

  function taskOne(callback) {
    getPackageJsons(repo.githubPath(), repo.packagePaths, (error, packageJsons) => {
      if (error) {
        callback(error, null);
        return;
      }
      callback(null, mergePackageJsons(packageJsons));
    });
  }

  function taskTwo(callback) {
    github.repos.get({
      owner: repo.userName(),
      repo: repo.repoName(),
    }, callback);
  }

  function taskThree(callback) {
    github.repos.getReadme({
      owner: repo.userName(),
      repo: repo.repoName(),
    }, (error, response) => {
      if (error || !response || !response.data || !response.data.content) {
        console.log(`Error fetching readme for ${repo.githubPath()}: ${error}`);
        callback(error);
        return;
      }
      if (response.data.encoding !== 'base64') {
        callback(new Error(`Unexpected encoding for readme: "${response.data.encoding}"`));
        return;
      }
      const str = new Buffer(response.data.content, 'base64').toString();
      callback(null, str);
    });
  }

  async.parallel([taskOne, taskTwo, taskThree], (error, results) => {
    if (error) {
      outerCallback(error, null);
      return;
    }

    const packageJson = results[0];
    const githubData = results[1];
    const readmeStr = results[2];
    if (!packageJson) {
      throw new Error(`No package.json found for repo: ${repo.url}`);
    }

    const packUtil = new PackageJsonUtil(packageJson);

    const tree = repo.buildBlob();

    // Set data from github
    tree.starCount = githubData.stargazers_count;
    tree.description = githubData.description;
    tree.homepage = githubData.homepage;
    tree.updatedAt = githubData.updated_at;
    tree.createdAt = githubData.created_at;
    tree.pushedAt = githubData.pushed_at;

    // Set dependencies and tags
    tree.dependencies = packUtil.allDependencies();
    tree.dependencyCount = tree.dependencies.length;

    // Tags
    const tags = tagMatcher(repo, packageJson, githubData, readmeStr);
    tree.tags = tags.map(tag => tag.name);
    const redundantTagNames = tags.reduce((prev, tag) => {
      return prev.concat(tag.alternateNames || []);
    }, []);
    tree.tagAlternateNames = Array.from(new Set(redundantTagNames)).sort();

    outerCallback(null, tree);
  });
}

function growSeedRetry(github, repo, index, total, cb) {
  const logPrefix = `[${index + 1}/${total}] ${repo.githubPath()}`;
  async.retry(3, (taskCallback, results) => {
    const attemptNumber = (results || []).length + 1;
    growSeed(github, repo, (error, value) => {
      if (error) {
        console.log(`${logPrefix} Attempt #${attemptNumber} failure:`, error);
      } else {
        console.log(`${logPrefix} downloaded`);
      }
      taskCallback(error, value);
    });
  }, cb);
}

/**
 * Given a list of 'repos', grow each one into a 'tree'.
 * @param  {[Seed]} repoList    array of repo objects
 * @param  {Function} callback  Takes (error, treeList)
 * @return {[Tree]}             array of tree objects
 */
module.exports = function growSeeds(repoList, callback) {
  const github = new GithubApi({
    headers: {
      'user-agent': process.env.GITHUB_USER_AGENT,
    },
  });
  github.authenticate({
    type: 'token',
    token: process.env.GITHUB_TOKEN,
  });

  async.mapSeries(repoList, (repo, cb) => {
    const index = repoList.indexOf(repo);
    growSeedRetry(github, repo, index, repoList.length, cb);
  }, callback);
};

if (!module.parent) {
  require('dotenv').config(); // eslint-disable-line
  const repos = starterProjectUrls.map(githubUrl => new Repository(githubUrl));
  module.exports(repos, (error, trees) => {
    console.log(trees); // eslint-disable-line no-console
  });
}
