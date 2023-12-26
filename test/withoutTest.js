// TEST CODE for without.js
const assert = require('chai').assert;
const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual')

describe("#without", () => {
  const words = ["hello", "world", "lighthouse"];
  it("returns ['hello', 'world'] for ['hello', 'world', 'lighthouse'], ['lighthouse']", () => {
    assert.isTrue(assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]));
  });
  it("does not alter the original variable", () => {
    assert.isTrue(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
  });
});