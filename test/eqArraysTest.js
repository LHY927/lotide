// TEST CODE for eqArrays.js
const assert = require('chai').assert;
const eqArrays = require('../eqArrays.js');

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("returns 'false' for ['Listhouse Labs'], ['Listhouse Labs', 'Bootcamp']", () => {
    assert.isFalse(eqArrays(['Listhouse Labs'], ['Listhouse Labs', 'Bootcamp'])); 
  });
});