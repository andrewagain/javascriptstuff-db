module.exports = {
  key: "view-libraries",
  name: "View Libraries",
  description:
    "View libraries render your app in the browser. You provide some code or data in a format that is specific to the library, and the library handles rendering DOM elements and styles. All of these run within the browser, but some also run on the server.",
  aka: ["UX Libraries", "UX Frameworks"],

  tags: [
    {
      name: "mobile",
      description:
        "Renders native views on iOS/Android instead of browser DOM elements.",
    },
  ],

  projects: [
    { url: "https://github.com/hyperapp/hyperapp" },
    { url: "https://github.com/facebook/react" },
    { url: "https://github.com/developit/preact" },
    { url: "https://github.com/angular/angular" },
    { url: "https://github.com/MithrilJS/mithril.js" },
    { url: "https://github.com/elm/compiler" },
    { url: "https://github.com/facebook/react-native", tags: ["mobile"] },
    { url: "https://github.com/OnsenUI/OnsenUI" },
    { url: "https://github.com/emberjs/ember.js" },
    { url: "https://github.com/vuejs/vue" },
    { url: "https://github.com/NativeScript/NativeScript", tags: ["mobile"] },
    { url: "https://github.com/sveltejs/svelte" },
  ],
};
