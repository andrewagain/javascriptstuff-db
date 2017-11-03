module.exports = {
  extends: ["airbnb", "prettier"],
  parser: "babel-eslint",
  env: {
    node: true,
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
      },
    ],
    "global-require": 0,
    "prefer-destructuring": 0,
    "no-console": 0,
    "no-param-reassign": 0,
  },
};
