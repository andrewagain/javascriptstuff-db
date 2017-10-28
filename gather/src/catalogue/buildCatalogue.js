module.exports = function buildCatalogue(categorySources) {
  const entries = [];

  categorySources.forEach(category => {
    const entry = {};
    [`name`, `key`, `aka`, `description`].forEach(key => {
      entry[key] = category[key];
    });
    entry.count = (category.projects || category.articles).length;
    entry.type = category.projects ? `PROJECT` : `ARTICLE`;
    entries.push(entry);
  });

  return entries;
};
