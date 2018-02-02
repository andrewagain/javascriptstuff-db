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
    {
      name: "autofix",
      description: "These linters will automatically fix your code for you.",
    },
    {
      name: "eslint",
      description: "These linters are powered by ESLint",
    },
    {
      name: "typescript",
      description: "Linter for TypeScript",
    },
  ],

  projects: [
    { url: "https://github.com/palantir/tslint", tags: ["typescript"] },
    {
      url: "https://github.com/beautify-web/js-beautify",
      tags: ["js", "html", "autofix"],
    },
    {
      url: "https://github.com/prettier/prettier",
      tags: ["js", "css", "autofix"],
    },
    { url: "https://github.com/CSSLint/csslint", tags: ["css"] },
    { url: "https://github.com/csscomb/csscomb.js", tags: ["css"] },
    {
      url: "https://github.com/standard/standard",
      tags: ["js", "opinionated", "eslint", "autofix"],
    },
    { url: "https://github.com/douglascrockford/JSLint", tags: ["js"] },
    {
      url: "https://github.com/eslint/eslint",
      tags: ["js", "eslint", "autofix"],
    },
    { url: "https://github.com/jshint/jshint", tags: ["js"] },
    { url: "https://github.com/stylelint/stylelint", tags: ["css"] },
    { url: "https://github.com/btford/write-good", tags: ["english"] },
    {
      url: "https://github.com/sindresorhus/xo",
      tags: ["js", "opinionated", "eslint", "autofix"],
    },
    { url: "https://github.com/wooorm/alex", tags: ["english"] },
  ],
};
