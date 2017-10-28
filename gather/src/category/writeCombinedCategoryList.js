const fse = require(`fs-extra`);
const path = require(`path`);

const fetchAllCategories = require(`./fetchAllCategories`);
const paths = require(`../util/paths`);

module.exports = function writeCategoryList(
  githubClient,
  categorySources,
  cache
) {
  const outputPath = path.join(paths.dataBuild, `categories.json`);
  return fetchAllCategories(
    githubClient,
    categorySources,
    cache
  ).then(categoryList => {
    fse.outputJsonSync(outputPath, categoryList, { spaces: 2 });
    return categoryList;
  });
};
