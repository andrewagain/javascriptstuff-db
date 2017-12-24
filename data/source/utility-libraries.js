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
    {
      name: "multi-tool",
      description:
        "These libraries have functions for a wide variety of use-cases - they are not focused on one task.",
      aka: ["toolkit"],
    },
    {
      name: "date",
      description: "These tools help with parsing & formatting dates & times",
      aka: ["time"],
    },
  ],

  projects: [
    { url: "https://github.com/moment/moment", tags: ["date"] },
    { url: "https://github.com/date-fns/date-fns", tags: ["date"] },
    { url: "https://github.com/lodash/lodash", tags: ["multi-tool"] },
    { url: "https://github.com/jashkenas/underscore", tags: ["multi-tool"] },
    { url: "https://github.com/jquery/jquery", tags: ["multi-tool", "ajax"] },
    { url: "https://github.com/faisalman/ua-parser-js" },
    { url: "https://github.com/moment/luxon", tags: ["date"] },
  ],
};
