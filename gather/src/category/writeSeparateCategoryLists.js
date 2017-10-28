const fetchCategory = require(`./fetchCategory`);
const paths = require(`../util/paths`);
const writeJsAndJson = require("../util/writeJsAndJson");

module.exports = function writeSeparateCategoryLists(
  githubClient,
  categorySources,
  cache
) {
  let promise = Promise.resolve([]);

  categorySources.forEach(categorySource => {
    const index = categorySources.indexOf(categorySource);
    promise = promise.then(outputList =>
      fetchCategory(
        githubClient,
        categorySource,
        cache,
        index,
        categorySources.length
      ).then(outputData => {
        writeJsAndJson(paths.dataBuild, categorySource.key, outputData);

        return outputList.concat(outputData);
      })
    );
  });
  return promise;
};
