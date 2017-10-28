module.exports = {
  key: "interesting",
  name: "Interesting",
  description:
    "These are things that I couldn't categorize but that I find interesting. Hopefully I find a place on the site for all of these things eventually.",
  aka: ["other", "unknown"],

  tags: [],

  projects: [
    // Loads your components indiviually. Seems similar to storybook.
    { url: "https://github.com/react-cosmos/react-cosmos" },

    // Display your components with a variety of different props.
    // Can be thought of as a testing tool, but also helps encourage isolation during development.
    // Seems similar to react-cosmos.
    { url: "https://github.com/storybooks/storybook" },

    // This is technically a React component but also similar to storybook and react-cosmos
    { url: "https://github.com/scup/atellier" },

    // Kind of a tutorial, boilerplate thing.
    // Explains how to deploy an SPA to GitHub Pages.
    { url: "https://github.com/rafrex/spa-github-pages", packagePaths: [] },

    // Error logging and aggregation platform
    { url: "https://github.com/getsentry/sentry" },

    // Redux Devtools extension
    // I guess I would call this a 'react tool'
    { url: "https://github.com/zalmoxisus/redux-devtools-extension" },

    // Looks interesting but I can't tell what it is
    { url: "https://github.com/voronianski/esnextbin" },

    // just a cool project in general
    { url: "https://github.com/tldr-pages/tldr" },

    { url: "https://github.com/conorhastings/redux-test-recorder" },

    // some search libraries
    { url: "https://github.com/bvaughn/js-search" },
    { url: "https://github.com/bvaughn/js-worker-search" },
    { url: "https://github.com/bvaughn/redux-search" },

    // junk that I should have my scraper filter out
    { url: "https://github.com/dennybritz/neal-react", tags: ["set"] },

    // converts images to css
    { url: "https://github.com/javierbyte/img2css", packagePaths: [] },

    // CMS based on React
    { url: "https://github.com/relax/relax" },

    // Used for generating style guides
    { url: "https://github.com/styleguidist/react-styleguidist" },
    // also generates a style guide:
    { url: "https://github.com/pocotan001/react-styleguide-generator" },
    { url: "https://github.com/jmfurlott/react-styleguide" },

    // icons
    { url: "https://github.com/primer/octicons" },

    // comparison of style techniques. very meta.
    { url: "https://github.com/MicheleBertoli/css-in-js", packagePaths: [] },

    // comparison of fluxes. could use for my flux page
    { url: "https://github.com/voronianski/flux-comparison" },

    // typography
    { url: "https://github.com/KyleAMathews/typography.js" },

    // dev tool
    { url: "https://github.com/reactjs/react-a11y" },

    // "The most advanced UX framework for enterprise applications"
    // This could be considered a 'framework' or 'toolkit' that is wrapped around react.
    // They use the word 'framework' here.
    { url: "https://github.com/grommet/grommet" },

    // This one calls itself a 'toolkit' but I think it is comparable to grommet.
    // Perhaps toolkit and framework are essentially synonyms.
    // 'create-react-app' could also be considered to be in this category.
    // There is a fine line between 'generators', 'frameworks', and 'starter projects'.
    { url: "https://github.com/insin/nwb" },

    // Neutrino
    // Sounds just like create-react-app.
    // I think I want a new category for these that I link to from my starter-projects page.
    // ( for now, just in the description. but maybe in the future I will add a 'related categories' feature.
    { url: "https://github.com/mozilla-neutrino/neutrino-dev" },

    // This is a 'React utility library'. Not sure if there are any other tools like it.
    { url: "https://github.com/acdlite/recompose" },

    // Render react apps into a Sketch file.
    // Applications might include:
    // * style guides
    // * generative art
    { url: "https://github.com/airbnb/react-sketchapp" },

    // Render React components to react-canvas
    // Similar to React native and React sketchapp in that you cannot render
    // DOM elements but instead render the components provided by react-canvas.
    // Supposed to perform better than react because canvas is faster than the DOM.
    { url: "https://github.com/Flipboard/react-canvas" },

    // Helps you compare/contrast react, angular, and other frameworks.
    // A simple todo implementation in all the different frameworks.
    { url: "https://github.com/tastejs/todomvc" }
  ]
};
