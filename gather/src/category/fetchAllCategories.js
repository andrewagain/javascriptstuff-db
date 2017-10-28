const fetchCategory = require(`./fetchCategory`);

module.exports = function fetchAllCategories(
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
      ).then(outputData => outputList.concat(outputData))
    );
  });
  return promise;
};
