module.exports = {
  key: "devtools",
  name: "Developer Tools",
  description:
    "Tools used by developers while building JavaScript applications.",
  aka: ["dev tools"],
  tags: [
    {
      name: "IDE",
      description:
        "Integrated development environment: a text editor specifically for software development.",
    },
  ],
  projects: [
    { url: "https://github.com/reactide/reactide", tags: ["IDE", "react"] },
    { url: "https://github.com/atom/atom", tags: ["IDE"] },
    { url: "https://github.com/depcheck/depcheck" },
    {
      url: "https://github.com/robertknight/webpack-bundle-size-analyzer",
      tags: ["webpack"],
    },
    {
      url: "https://github.com/FormidableLabs/webpack-dashboard",
      tags: ["webpack"],
    },
    { url: "https://github.com/typicode/husky" },
    { url: "https://github.com/okonet/lint-staged" },
    { url: "https://github.com/kitze/sizzy" },
    {
      url: "https://github.com/reduxjs/redux-devtools",
      tags: ["react", "browser extension"],
    },
    {
      url: "https://github.com/facebook/react-devtools",
      tags: ["react", "browser extension"],
    },
    {
      url: "https://github.com/vuejs/vue-devtools",
      tags: ["vue", "browser extension"],
    },
    { url: "https://github.com/kdzwinel/betwixt" },
    { url: "https://github.com/foreverjs/forever" },
    { url: "https://github.com/geuis/helium-css" },
    { url: "https://github.com/lerna/lerna" },
    {
      url: "https://github.com/node-inspector/node-inspector",
      deprecated: true,
    },
    { url: "https://github.com/zalmoxisus/remote-redux-devtools" },
    { url: "https://github.com/infinitered/reactotron", tags: ["react"] },
  ],
};
