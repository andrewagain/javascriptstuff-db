const colors = require(`colors/safe`);
const uniq = require(`lodash/uniq`);

const fetchAllFullProjects = require(`../project/fetchAllFullProjects`);
const getCleanTag = require(`../project/getCleanTag`);

/**
 * Given the source data for a category, fetches all the data for that category.
 */
module.exports = function fetchCategory(
  githubClient,
  categoryData,
  cache,
  index = 0,
  total = 1
) {
  console.log(
    colors.bold(`\n📝  Category ${index + 1}/${total}: ${categoryData.key}\n`)
  );

  const outputData = {};
  [`key`, `name`, `description`, `aka`].forEach(propertyKey => {
    const value = categoryData[propertyKey];
    if (value) {
      outputData[propertyKey] = value;
    }
  });
  const manualTagNames = (categoryData.articles ||
    categoryData.projects ||
    []
  ).reduce((tags, project) => tags.concat(project.tags || []), []);
  const manualTags = uniq(manualTagNames.map(tagName => ({ name: tagName })));
  outputData.tags = (categoryData.tags || [])
    .concat(manualTags)
    .map(getCleanTag);
  outputData.notes = categoryData.notes || ``;

  // TODO: some processing on articles - perhaps just fetch the article meta image
  outputData.articles = !categoryData.articles
    ? []
    : categoryData.articles.map(article =>
        Object.assign({}, article, { notes: `` })
      );

  return fetchAllFullProjects(
    githubClient,
    categoryData,
    cache
  ).then(projects => {
    outputData.projects = projects.map(project => project.stableObject());
    return outputData;
  });
};
