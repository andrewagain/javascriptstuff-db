const systemPath = require("path");
const fse = require("fs-extra");

// Write the same data as both .js and .json
module.exports = function writeJsAndJson(directory, fileBaseName, data) {
  const jsonOutputPath = systemPath.join(directory, `${fileBaseName}.json`);
  const jsOutputPath = systemPath.join(directory, `${fileBaseName}.js`);

  const jsonString = JSON.stringify(data, null, 2);
  fse.outputFileSync(jsonOutputPath, jsonString, "utf8");
  fse.outputFileSync(jsOutputPath, `module.exports = ${jsonString}`, "utf8");
};
