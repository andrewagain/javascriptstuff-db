const fetchCategory = require(`./fetchCategory`);
const paths = require(`../util/paths`);
const writeJsAndJson = require("../util/writeJsAndJson");

module.exports = function writeSeparateCategoryLists(
  githubClient,
  categorySources,
  cache
) {
  let promise = Promise.resolve({ categories: [], errors: [] });

  categorySources.forEach(categorySource => {
    const index = categorySources.indexOf(categorySource);
    promise = promise.then(infoSoFar =>
      fetchCategory(
        githubClient,
        categorySource,
        cache,
        index,
        categorySources.length
      ).then(({ category, errors }) => {
        writeJsAndJson(paths.dataBuild, categorySource.key, category);

        return {
          categories: infoSoFar.categories.concat([category]),
          errors: infoSoFar.errors.concat(errors),
        };
      })
    );
  });
  return promise;
};
