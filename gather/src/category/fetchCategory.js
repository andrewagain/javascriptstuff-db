const colors = require(`colors/safe`);
const uniq = require(`lodash/uniq`);

const fetchAllFullProjects = require(`../project/fetchAllFullProjects`);
const getCleanTag = require(`../project/getCleanTag`);

function getCategoryTags(inputData) {
  const allTags = inputData.tags || [];
  const entities = inputData.articles || inputData.projects || [];
  const entityTagNames = uniq(
    entities.reduce((tags, project) => tags.concat(project.tags || []), [])
  );
  entityTagNames.forEach(tagName => {
    if (!allTags.find(x => x.name === tagName)) {
      allTags.push({ name: tagName });
    }
  });
  return allTags.map(getCleanTag);
}

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
  outputData.tags = getCategoryTags(categoryData);
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
