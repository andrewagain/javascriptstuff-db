module.exports = {
  key: "linters",
  name: "Linters",
  description:
    "Linters find potential errors and/or formatting inconsistencies in your code. Some will automatically fix your code for you.",
  aka: ["code formatters", "beautifiers", "prettifiers"],

  tags: [
    {
      name: "html",
      description: "Formats/beautifies HTML.",
    },
    {
      name: "css",
      description: "Formats/beautifies CSS.",
    },
    {
      name: "js",
      description: "Formats/beautifies JavaScript.",
    },
    {
      name: "opinionated",
      description:
        "These don't need configuration because they take a stance on every rule.",
    },
    {
      name: "english",
      description: "These lint english - not a programming language.",
    },
  ],

  projects: [
    {
      url: "https://github.com/beautify-web/js-beautify",
      tags: ["js", "html"],
    },
    { url: "https://github.com/prettier/prettier", tags: ["js", "css"] },
    { url: "https://github.com/CSSLint/csslint", tags: ["css"] },
    { url: "https://github.com/csscomb/csscomb.js", tags: ["css"] },
    {
      url: "https://github.com/standard/standard",
      tags: ["js", "opinionated"],
    },
    { url: "https://github.com/douglascrockford/JSLint", tags: ["js"] },
    { url: "https://github.com/eslint/eslint", tags: ["js"] },
    { url: "https://github.com/jshint/jshint", tags: ["js"] },
    { url: "https://github.com/stylelint/stylelint", tags: ["css"] },
    { url: "https://github.com/btford/write-good", tags: ["english"] },
    { url: "https://github.com/sindresorhus/xo", tags: ["opinionated"] },
    { url: "https://github.com/wooorm/alex", tags: ["english"] },
  ],
};
