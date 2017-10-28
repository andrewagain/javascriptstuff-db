const dotenv = require(`dotenv`);
const GithubApi = require(`github`);
const program = require(`commander`);

const categorySources = require(`../../data/source/all`);
const writeSeparateCategoryLists = require(`./category/writeSeparateCategoryLists`);
const writeCatalogue = require(`./catalogue/writeCatalogue`);

dotenv.config();

const githubClient = new GithubApi({
  headers: {
    "user-agent": process.env.GITHUB_USER_AGENT
  }
});
githubClient.authenticate({
  type: `token`,
  token: process.env.GITHUB_TOKEN
});

function run() {
  program
    .option(`-f, --force-download`, `Download everything - don't use the cache`)
    .parse(process.argv);

  writeSeparateCategoryLists(
    githubClient,
    categorySources,
    !program.forceDownload
  )
    .then(categories => {
      console.log(`\nFinished ${categories.length} categories`);
      writeCatalogue(categorySources);
    })
    .catch(error => {
      console.error(error);
    });
}

run();
