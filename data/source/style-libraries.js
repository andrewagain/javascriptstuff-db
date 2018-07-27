module.exports = {
  key: "style-libraries",
  name: "Style Libraries",
  description:
    "Tools that assist you with applying CSS to your components or HTML.",
  aka: ["css processors", "style utilities", "stylers"],

  tags: [
    {
      name: "css processor",
      description:
        "Converts another language into CSS or modifies/improves CSS.",
    },
    {
      name: "inline",
      description:
        "Works by setting styles in JavaScript rather than in a separate style file.",
    },
    {
      name: "react",
      description:
        "Works only with React or mentions specifically that it works well with React.",
    },
  ],

  projects: [
    { url: "https://github.com/Khan/aphrodite" },
    { url: "https://github.com/adamterlson/cairn" },
    { url: "https://github.com/blakeembrey/react-free-style", tags: ["react"] },
    {
      url: "https://github.com/casesandberg/reactcss",
      tags: ["inline", "react"],
    },
    { url: "https://github.com/css-modules/css-modules", tags: ["react"] },
    { url: "https://github.com/FormidableLabs/radium", tags: ["inline"] },
    { url: "https://github.com/gajus/react-css-modules", tags: ["react"] },
    { url: "https://github.com/iamvdo/pleeease", tags: ["css processor"] },
    { url: "https://github.com/cssinjs/jss" },
    { url: "https://github.com/less/less.js", tags: ["css processor"] },
    { url: "https://github.com/maxguzenski/react-easy-style", tags: ["react"] },
    { url: "https://github.com/paypal/glamorous", tags: ["inline"] },
    { url: "https://github.com/jsxstyle/jsxstyle", tags: ["inline"] },
    { url: "https://github.com/postcss/postcss", tags: ["css processor"] },
    { url: "https://github.com/rofrischmann/fela" },
    { url: "https://github.com/rofrischmann/react-look", tags: ["react"] },
    { url: "https://github.com/sass/sass", tags: ["css processor"] },
    { url: "https://github.com/segmentio/myth", tags: ["css processor"] },
    {
      url: "https://github.com/styled-components/styled-components",
      tags: ["react"],
    },
    { url: "https://github.com/stylus/stylus", tags: ["css processor"] },
    {
      url: "https://github.com/unicorn-standard/react-pacomo",
      tags: ["react"],
    },
    { url: "https://github.com/rtsao/styletron" },
    { url: "https://github.com/zeit/styled-jsx", tags: ["react"] },
    { url: "https://github.com/emotion-js/emotion", tags: ["inline"] },
  ],
};
