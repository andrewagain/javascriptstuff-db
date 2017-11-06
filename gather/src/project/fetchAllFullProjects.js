const fetchFullProjectCache = require(`./fetchFullProjectCache`);
const SourceProject = require(`../model/SourceProject`);
const getProjectTags = require(`./getProjectTags`);

/**
 * Fetch all the projects in a given category.
 * Resolves to an object like { projects: [...], errors: [...] }.
 * Should never return a rejection.
 */
module.exports = function fetchAllFullProjects(
  githubClient,
  categoryData,
  cache
) {
  if (!categoryData.projects) {
    return Promise.resolve({ projects: [], errors: [] });
  }
  const sourceProjects = categoryData.projects.map(
    url => new SourceProject(url)
  );

  let promise = Promise.resolve({
    projects: [],
    errors: [],
  });

  sourceProjects.forEach(sourceProject => {
    const index = sourceProjects.indexOf(sourceProject);
    promise = promise.then(
      info =>
        // This promise is always resolved.
        // If there is an error while fetching a full project, we simply do not include that
        // project in the results.
        new Promise(resolve => {
          fetchFullProjectCache(
            githubClient,
            sourceProject,
            categoryData.fetchPackageJson,
            cache,
            index,
            sourceProjects.length
          )
            .then(project => {
              project.tags = (project.tags || []).concat(
                getProjectTags(project, categoryData.tags)
              );
              resolve({
                projects: info.projects.concat(project),
                errors: info.errors,
              });
            })
            .catch(err => {
              console.error(
                `Error fetching project ${sourceProject.githubPath}`,
                err
              );
              resolve({
                projects: info.projects,
                errors: info.errors.concat(err),
              });
            });
        })
    );
  });
  return promise;
};
