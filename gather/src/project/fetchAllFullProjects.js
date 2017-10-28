const fetchFullProjectCache = require(`./fetchFullProjectCache`);
const SourceProject = require(`../model/SourceProject`);
const getProjectTags = require(`./getProjectTags`);

module.exports = function fetchAllFullProjects(
  githubClient,
  categoryData,
  cache
) {
  if (!categoryData.projects) {
    return Promise.resolve([]);
  }
  const sourceProjects = categoryData.projects.map(
    url => new SourceProject(url)
  );

  let promise = Promise.resolve([]);

  sourceProjects.forEach(sourceProject => {
    const index = sourceProjects.indexOf(sourceProject);
    promise = promise.then(
      projects =>
        // This promise is always resolved.
        // If there is an error while fetching a full project, we simply do not include that
        // project in the results.
        new Promise(resolve => {
          fetchFullProjectCache(
            githubClient,
            sourceProject,
            cache,
            index,
            sourceProjects.length
          )
            .then(project => {
              project.tags = (project.tags || []).concat(
                getProjectTags(project, categoryData.tags)
              );
              resolve(projects.concat(project));
            })
            .catch(err => {
              console.error(
                `Error fetching project ${sourceProject.githubPath}`,
                err
              );
              resolve(projects);
            });
        })
    );
  });
  return promise;
};
