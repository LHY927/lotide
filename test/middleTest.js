// TEST CODE for middle.js
const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe("#map", () => {
  it("returns [] for [1, 2]", () => {
    assert.isTrue(assertArraysEqual(middle([1, 2]), []));
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.isTrue(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.isTrue(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
  });
});