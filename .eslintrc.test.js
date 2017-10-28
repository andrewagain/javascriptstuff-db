module.exports = {
  extends: "./.eslintrc.js",
  env: {
    browser: true,
    mocha: true,
  },
  plugins: ["mocha"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "mocha/no-exclusive-tests": "error",
    "no-unused-expressions": 0,
    "func-names": 0,
    "prefer-arrow-callback": 0,
  },
};
