module.exports = {
  key: "state-managers",
  name: "State Managers",
  description: "These manage the state of your JavaScript application.",
  aka: ["flux libraries"],
  tags: [
    {
      name: "pure flux",
      description: "Matches exactly the original definition of flux",
    },
    {
      name: "react",
      description:
        "Has code or documentation that specifically helps to integrate with React",
    },
    {
      name: "redux",
      description: "A Redux plugin",
    },
    {
      name: "mobx",
      description: "A MobX plugin.",
    },
  ],
  projects: [
    { url: "https://github.com/bcherny/undux" },
    { url: "https://github.com/mweststrate/immer" },
    { url: "https://github.com/cerebral/cerebral" },
    { url: "https://github.com/jumpsuit/jumpstate" },
    {
      url: "https://github.com/dvajs/dva",
      packagePaths: ["package.json", "packages/dva-core/package.json"],
    },
    { url: "https://github.com/keajs/kea" },
    { url: "https://github.com/Olical/EventEmitter" },
    { url: "https://github.com/jeromeetienne/microevent.js" },
    { url: "https://github.com/mroderick/PubSubJS" },
    { url: "https://github.com/solkimicreb/react-easy-state", tags: ["react"] },
    { url: "https://github.com/facebook/flux", tags: ["pure flux"] },
    { url: "https://github.com/goatslacker/alt", tags: ["pure flux"] },
    { url: "https://github.com/optimizely/nuclear-js", tags: ["pure flux"] },
    { url: "https://github.com/yahoo/fluxible", tags: ["pure flux"] },
    { url: "https://github.com/acdlite/flummox", tags: ["pure flux"] },
    { url: "https://github.com/mobxjs/mobx", tags: ["react", "mobx"] },
    {
      url: "https://github.com/mobxjs/mobx-state-tree",
      tags: ["react", "mobx"],
    },
    { url: "https://github.com/reduxjs/redux", tags: ["react", "redux"] },
    {
      url: "https://github.com/redux-saga/redux-saga",
      tags: ["react", "redux"],
    },
    { url: "https://github.com/reduxjs/react-redux", tags: ["react", "redux"] },
    {
      url: "https://github.com/tommikaikkonen/redux-orm",
      tags: ["react", "redux"],
    },
    { url: "https://github.com/vuejs/vuex", tags: ["vue"] },
    { url: "https://github.com/cerebral/cerebral" },
    {
      url: "https://github.com/robinvdvleuten/vuex-persistedstate",
      tags: ["vue"],
    },
    { url: "https://github.com/moreartyjs/moreartyjs", tags: ["react"] },
    { url: "https://github.com/jamiebuilds/unstated", tags: ["react"] },
    { url: "https://github.com/mardix/litestate" },
  ],
};
