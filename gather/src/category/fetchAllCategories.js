const fetchCategory = require(`./fetchCategory`);

/**
 * Fetch all the categories.
 * Resolves to an object like: { categories: [...], errors: [...] }.
 * Errors are per-project so there can be more errors than categories.
 */
module.exports = function fetchAllCategories(
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
      ).then(({ category, errors }) => ({
        categories: infoSoFar.categories.concat([category]),
        errors: infoSoFar.errors.concat(errors),
      }))
    );
  });
  return promise;
};
