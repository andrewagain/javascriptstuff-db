const includesAny = require("../util/includesAny");

module.exports = {
  name: "",
  description: "",
  aka: [""],

  tags: [
    {
      name: "",
      description: ".",
      // If the tag can be matched automatically, include a match function.
      // Otherwise set the tag in each matching project's 'tags' property.
      match: project => includesAny(project.dependencies, [""])
    }
  ],

  projects: [{ url: "" }]
};
