module.exports = {
  key: "bundlers",
  name: "Bundlers",
  description:
    "These are tools that transform JS and CSS. They are typically highly configurable and pluggable.",
  aka: ["JavaScript bundlers", "packagers"],

  tags: [
    {
      name: "zero config",
      description:
        "Bundler will build an app without any configuration file whatsoever, usually by relying on conventions.",
    },
  ],
  projects: [
    { url: "https://github.com/brunch/brunch" },
    { url: "https://github.com/webpack/webpack" },
    { url: "https://github.com/parcel-bundler/parcel", tags: ["zero config"] },
    { url: "https://github.com/rollup/rollup" },
  ],
};
