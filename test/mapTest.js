// TEST CODE for map.js
const assert = require('chai').assert;
const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

describe("#map", () => {
  it("returns [3, 5, 4] for ['dog', 'happy', 'love'], word => word.length", () => {
    assert.isTrue(assertArraysEqual(map(['dog', 'happy', 'love'], word => word.length),[3, 5, 4]));
  });
  it("returns [2,4,6,8] for [1,2,3,4], num => num*2", () => {
    assert.isTrue(assertArraysEqual(map([1,2,3,4], num => num * 2),[2, 4, 6, 8]));
  });
  it("returns [false, true] for [1, NaN], item => Number.isNaN(item)", () => {
    assert.isTrue(assertArraysEqual(map([1, NaN], item => Number.isNaN(item)),[false, true]));
  });
});