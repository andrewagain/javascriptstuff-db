module.exports = {
  key: "static-site-generators",
  name: "Static Site Generators",
  description: "Tools that help you generate a static site.",
  aka: ["static site builder", "static site framework"],

  tags: [
    {
      name: "react",
      description:
        "The generator either uses React internally or encourages and supports you using it in combination with the generator."
    }
  ],

  projects: [
    { url: "https://github.com/antwarjs/antwar", tags: ["react"] },
    { url: "https://github.com/gatsbyjs/gatsby", tags: ["react"] },
    { url: "https://github.com/nozzle/react-static", tags: ["react"] },
    { url: "https://github.com/jnordberg/wintersmith" },
    { url: "https://github.com/static-dev/spike" },
    { url: "https://github.com/phenomic/phenomic" },
    { url: "https://github.com/segmentio/metalsmith" },
    { url: "https://github.com/sintaxi/harp" },
    { url: "https://github.com/assemble/assemble" },
    { url: "https://github.com/docpad/docpad" },
    { url: "https://github.com/hexojs/hexo" },
    { url: "https://github.com/lord/slate", tags: ["documentation"] },
    {
      url:
        "https://github.com/markdalgleish/static-site-generator-webpack-plugin"
    },
    { url: "https://github.com/GitbookIO/gitbook" },
    { url: "https://github.com/elmasse/nextein", tags: ["react"] },
    { url: "https://github.com/flatiron/blacksmith" },
    { url: "https://github.com/eduardoboucas/staticman" },
    { url: "https://github.com/vigetlabs/blendid" }
  ]
};
