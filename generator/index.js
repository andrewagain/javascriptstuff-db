/**
 * Run to create the 'data/starter-projects.json' output file.
 */
const dotenv = require('dotenv');
const fse = require('fs-extra');
const path = require('path');

const growSeeds = require('./growSeeds');
const Repository = require('./Repository');
const starterProjectUrls = require('./starterProjectUrls');
const tagJsonBlob = require('./tagJsonBlob');

dotenv.config();

const seeds = starterProjectUrls.map(githubUrl => new Repository(githubUrl));
growSeeds(seeds, (error, trees) => {
  if (error) {
    console.log('Error fetching repository details:', error);
    return;
  }
  console.log(`Successfully downloaded details for ${trees.length} repositories`);

  trees.sort((a, b) => {
    return a.createdAt < b.createdAt ? -1 : 1;
  });
  const blob = {
    repos: trees,
    tags: tagJsonBlob,
  };
  const jsonString = JSON.stringify(blob, null, 2);
  const jsonOutputPath = path.join(__dirname, '..', 'data', 'starter-projects.json');
  fse.outputFileSync(jsonOutputPath, jsonString, 'utf8');

  const jsOutputPath = path.join(__dirname, '..', 'data', 'starterProjects.js');
  fse.outputFileSync(jsOutputPath, `module.exports = ${jsonString}`, 'utf8');
});
