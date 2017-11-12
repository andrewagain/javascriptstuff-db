const includesAny = require("../util/includesAny");

module.exports = {
  key: "bundlers",
  name: "Bundlers",
  description:
    "These are tools that transform JS and CSS. They are typically highly configurable and pluggable.",
  aka: ["JavaScript bundlers", "packagers"],

  tags: [
    {
      name: "",
      description: ".",
      // If the tag can be matched automatically, include a match function.
      // Otherwise set the tag in each matching project's 'tags' property.
      match: project => includesAny(project.dependencies, [""]),
    },
  ],

  projects: [
    { url: "https://github.com/brunch/brunch" },
    { url: "https://github.com/webpack/webpack" },
  ],
};
