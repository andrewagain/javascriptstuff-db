const tags = require('./tags');

/**
 * For the given repository data and package JSON, determine which
 * tags match.
 * @param  {Repository} repo     with githubUrl and name
 * @param  {Object} packageJson  package.json data with dependencies and such
 * @param  {Object} githubData   github data from api.github.com/repos/<repo name>
 * @param  {String} readmeStr    README.md content - will be undefined if project has no README
 * @return {[String]}            array of tags (strings)
 */
module.exports = function tagMatcher(repo, packageJson, githubData, readmeStr) {
  const matches = [];
  tags.forEach((tag) => {
    if (repo.additionalTags.includes(tag.name)) {
      matches.push(tag);
    } else if (tag.match(repo, packageJson, githubData, readmeStr) && !repo.nonTags.includes(tag.name)) {
      matches.push(tag);
    }
  });
  return matches;
};
