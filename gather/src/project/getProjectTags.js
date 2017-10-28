/**
 * Given a full project and a list of tags that might match that project,
 * return an array of the tag names that match.
 *
 * This just returns the tags that match via the match() function.
 * There are additional tags already on the project that have been assigned manually.
 *
 * @param  {FullProject} fullProject
 * @param  {Object[]} availableTags   array of tags - each is expected to have a match() function
 * @return {String[]}                 array of tag names
 */
module.exports = function getProjectTags(fullProject, availableTags) {
  return availableTags
    .filter(tag => !!tag.match)
    .filter(tag => tag.match(fullProject))
    .map(tag => tag.name);
};
