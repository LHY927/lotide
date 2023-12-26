// TEST CODE for letterPositions.js
const assert = require('chai').assert;
const letterPositions = require('../letterPositions');
const assertObjectsEqual = require('../assertObjectsEqual');

describe("#letterPositions", () => {
  const result = {
    l: [ 0 ],
    i: [ 1, 11 ],
    g: [ 2 ],
    h: [ 3, 5, 15, 18 ],
    t: [ 4, 14 ],
    o: [ 6, 19 ],
    u: [ 7, 20 ],
    s: [ 8, 21 ],
    e: [ 9, 16, 22 ],
    n: [ 12 ]
  };
  it("returns {\nl: [ 0 ],\ni: [ 1, 11 ],\ng: [ 2 ],\nh: [ 3, 5, 15, 18 ],\nt: [ 4, 14 ],\no: [ 6, 19 ],\nu: [ 7, 20 ],\ns: [ 8, 21 ],e: [ 9, 16, 22 ],\nn: [ 12 ]\n} for 'lighthouse in the house'", () => {
    assert.equal(letterPositions("lighthouse in the house")["l"][0], 0);
  });
});