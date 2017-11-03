module.exports = {
  key: "view-libraries",
  name: "View Libraries",
  description:
    "View libraries render your app in the browser. You provide some code or data in a format that is specific to the library, and the library handles rendering DOM elements and styles. All of these run within the browser, but some also run on the server.",
  aka: ["UX Libraries", "UX Frameworks"],

  tags: [],

  projects: [
    { url: "https://github.com/facebook/react" },
    {
      url: "https://github.com/developit/preact",
      notes:
        "Smaller library than React which strives for (almost) feature parity",
    },
    { url: "https://github.com/angular/angular" },
    { url: "https://github.com/MithrilJS/mithril.js" },
    { url: "https://github.com/elm-lang/core", packagePaths: [] },
    { url: "https://github.com/facebook/react-native" },
    { url: "https://github.com/OnsenUI/OnsenUI" },
    { url: "https://github.com/emberjs/ember.js" },
  ],
};
