const systemPath = require(`path`);

const fse = require(`fs-extra`);

const fetchCategory = require(`./fetchCategory`);
const paths = require(`../util/paths`);

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
        const outputPath = systemPath.join(
          paths.dataBuild,
          `${categorySource.key}.json`
        );
        fse.outputJsonSync(outputPath, outputData);
        return outputList.concat(outputData);
      })
    );
  });
  return promise;
};
