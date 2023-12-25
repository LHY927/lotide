const assert = require('chai').assert;
const countLetters = require('../countLetters');
const assertObjectsEqual = require('../assertObjectsEqual')

describe("#countLetters", () => {
  it("returns { L: 2, i: 1, s: 3, t: 1, h: 1, o: 1, u: 1, e: 1, ' ': 1, a: 1, b: 1 } for Listhouse Labs", () => {
    assert.isTrue(assertObjectsEqual(countLetters("Listhouse Labs"), { L: 2, i: 1, s: 3, t: 1, h: 1, o: 1, u: 1, e: 1, ' ': 1, a: 1, b: 1 }));
  });
});