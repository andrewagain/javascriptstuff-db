module.exports = {
  key: "utility-libraries",
  name: "Utility Libraries",
  description:
    "Each of these libraries contain many functions that are meant to help with a variety of common tasks in JavaScript.",
  aka: [
    "lodash alternatives",
    "jquery alternatives",
    "underscore alternatives",
  ],

  tags: [
    {
      name: "ajax",
      description: "Includes methods for sending HTTP requests.",
    },
  ],

  projects: [
    { url: "https://github.com/lodash/lodash" },
    { url: "https://github.com/jashkenas/underscore" },
    { url: "https://github.com/jquery/jquery", tags: ["ajax"] },
  ],
};
