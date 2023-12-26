const assert = require('chai').assert;
const tail   = require('../tail');
const assertArraysEqual = require('../assertArraysEqual')

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.isTrue(assertArraysEqual(tail([1, 2, 3]), [2, 3]));
  });
  it("returns '' for ['5']", () => {
    assert.isTrue(assertArraysEqual(tail(['5']), '')); 
  });
});