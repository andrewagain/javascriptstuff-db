const fse = require(`fs-extra`);
const path = require(`path`);
const colors = require(`colors/safe`);

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
  ).then(({ categories, errors }) => {
    fse.outputJsonSync(outputPath, categories, { spaces: 2 });
    console.log(colors.red(`${errors.length} errors`));
    return categories;
  });
};
