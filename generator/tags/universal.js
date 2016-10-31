const tag = {
  name: 'universal',
  alternateNames: ['isomorphic'],
  description: 'Runs on both the client and the server, usually with Express or Koa.',
  color: '#0579BF',

  match: function matchFunc(seed, packageJson, githubData) {
    // I used to check for express, koa, and hapi. Then I realized that just
    // having a server doesn't make the project universal/isomorphic.
    //
    // Now I check the project name and description for 'universal' or 'isomorphic'.

    const nameIso = seed.githubPath().match(/isomorphic/i);
    const nameUni = seed.githubPath().match(/universal/i);

    let descIso = false;
    let descUni = false;
    if (githubData.description) {
      descIso = githubData.description.match(/isomorphic/i);
      descUni = githubData.description.match(/universal/i);
    }

    return nameIso || nameUni || descIso || descUni;
  },
};
module.exports = tag;
