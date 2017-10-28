const systemPath = require(`path`);

const paths = require(`../util/paths`);
const buildCatalogue = require(`./buildCatalogue`);
const writeJsAndJson = require("../util/writeJsAndJson");

module.exports = function writeCatalogue(categorySources) {
  const outputPath = systemPath.join(paths.dataBuild, `catalogue.json`);
  const catalogue = buildCatalogue(categorySources);
  writeJsAndJson(paths.dataBuild, "catalogue", catalogue);
  console.log(`Wrote catalogue to ${outputPath}`);
};
