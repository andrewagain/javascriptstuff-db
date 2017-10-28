const starterProjects = require("../data/starterProjects");

function startersWithTag(searchTag) {
  const matching = [];
  starterProjects.repos.forEach(starter => {
    if (starter.tags.indexOf(searchTag.toLowerCase()) > -1) {
      matching.push(starter);
    }
  });
  return matching;
}

module.exports = {
  starterProjects: starterProjects.repos,
  starterProjectTags: starterProjects.tags,
  startersWithTag
};
