const fse = require(`fs-extra`);
const path = require(`path`);

const paths = require(`../util/paths`);
const buildCatalogue = require(`./buildCatalogue`);

module.exports = function writeCatalogue(categorySources) {
  const outputPath = path.join(paths.dataBuild, `catalogue.json`);
  const catalogue = buildCatalogue(categorySources);
  fse.outputJsonSync(outputPath, catalogue, { spaces: 2 });
  console.log(`Wrote catalogue to ${outputPath}`);
};
