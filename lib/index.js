var starterProjects = require('../data/starterProjects');

function startersWithTag(searchTag) {
  var matching = [];
  starterProjects.repos.forEach(function eachStarter(starter) {
    if (starter.tags.indexOf(searchTag) > -1) {
      matching.push(starter);
    }
  });
  return matching;
}

module.exports = {
  starterProjects: starterProjects.repos,
  starterProjectTags: starterProjects.tags,
  startersWithTag: startersWithTag,
};
