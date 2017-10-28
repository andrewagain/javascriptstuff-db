module.exports = {
  key: "error",
  name: "Error",
  description: "Projects I wasn't able to parse for one reason or another.",
  aka: ["fail"],

  tags: [],

  projects: [
    // React components
    // No package.json
    { url: "https://github.com/japgolly/scalajs-react" },
    { url: "https://github.com/tomocchino/react-snake", tags: ["game"] },
    { url: "https://github.com/felixgborrego/simple-docker-ui" },
    { url: "https://github.com/fruux/Baikal" },
    // Has package.json but not using master branch
    { url: "https://github.com/Merri/react-tabbordion", tags: ["set"] },
    {
      url: "https://github.com/mapbox/react-colorpickr",
      tags: ["color", "picker"]
    },

    // Example apps
    // Repo contains multiple examples
    // Maybe I'll want to support this somehow at some point
    { url: "https://github.com/mobxjs/mobx-examples" },
    // Haven't looked into these yet
    {
      url: "https://github.com/fdecampredon/react-rxjs-todomvc",
      tags: ["todo"]
    },
    { url: "https://github.com/javierbyte/clashjs", tags: ["game"] },
    { url: "https://github.com/rmosolgo/graphql-ruby-demo" },
    { url: "https://github.com/javierbyte/cohesive-colors" },
    { url: "https://github.com/elpassion/sprint-poker" },
    { url: "https://github.com/nashvail/ReactPathMenu" },
    { url: "https://github.com/fbarrailla/react-chronometer" },
    { url: "https://github.com/brendansudol/text-to-emoji" },
    { url: "https://github.com/tshaddix/react-chrome-redux-examples" },
    { url: "https://github.com/jxnblk/shade" },
    { url: "https://github.com/AdaptiveConsulting/ReactiveTraderCloud" },
    { url: "https://github.com/ryanatkn/react-mobx-typescript-experiments" },
    { url: "https://github.com/tsurupin/portfolio" },
    { url: "https://github.com/cjlarose/de-jong", tags: ["educational"] }
  ]
};
