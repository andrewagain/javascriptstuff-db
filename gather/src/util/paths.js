const path = require(`path`);

module.exports = {
  data: path.join(__dirname, `../../../data`),
  dataCache: path.join(__dirname, `../../../data/.cache`),
  dataBuild: path.join(__dirname, `../../../dist`)
};
