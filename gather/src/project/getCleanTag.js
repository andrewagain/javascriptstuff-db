/**
 * Given a tag which may include a 'match' function, return a tag which only has json-friendly data.
 * Also remove undefined or null properties.
 */
module.exports = function getCleanTag(tag) {
  const cleanTag = {};
  [`name`, `aka`, `description`].forEach(key => {
    if (tag[key]) {
      cleanTag[key] = tag[key];
    }
  });
  return cleanTag;
};
