/**
 * Returns an array with all the tags but with their 'match' functions removed
 * so they can be output as JSON.
 */
const tags = require('./tags');

module.exports = tags.map((tag) => {
  return {
    name: tag.name,
    description: tag.description,
    alternateNames: tag.alternateNames,
    color: tag.color,
  };
});
