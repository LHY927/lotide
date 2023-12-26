// TEST CODE for flatten.js
const assert = require('chai').assert;
const flatten = require('../flatten.js');
const assertArraysEqual = require('../assertArraysEqual.js')

describe("#flatten", () => {
  it("returns [ 1, 2, 3, 4, 5, 6 ] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.isTrue(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]));
  });
});