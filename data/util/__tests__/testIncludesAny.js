const chai = require("chai");

const includesAny = require("../includesAny");

const expect = chai.expect;

describe("includesAny", () => {
  it("should work", () => {
    expect(
      includesAny(
        ["knex", "lazy-route", "mobx", "mobx-react", "mobx-react-devtools"],
        [
          "flux",
          "mobx",
          "redux",
          "reflux",
          "alt",
          "alt.js",
          "flummox",
          "martyjs",
          "miniflux",
        ]
      )
    ).to.be.true;
  });
});
