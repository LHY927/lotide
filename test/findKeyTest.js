// TEST CODE for findKey.js
const assert = require('chai').assert;
const findKey = require('../findKey.js');

describe("#findKey", () => {
  it("returns 'noma' for {'Blue Hill': { stars: 1 }, \nAkaleri: { stars: 3 }, \nnoma: { stars: 2 }, \nelBulli: { stars: 3 }, \nOra: { stars: 2 }, \nAkelarre: { stars: 3 }, \n}, \n(x) => x.stars === 2", () => {
    assert.strictEqual(findKey(
      {
        'Blue Hill': { stars: 1 },
        Akaleri: { stars: 3 },
        noma: { stars: 2 },
        elBulli: { stars: 3 },
        Ora: { stars: 2 },
        Akelarre: { stars: 3 },
      },
      (x) => x.stars === 2
    ),'noma');
  });
  it("returns 'gidle' for { \nblackpink: 'Jennie', \ngidle: 'Yuqi', \naespa:'Ningning', \n}, \nname => name==='Yuqi'", () => {
    assert.strictEqual(findKey(
      {
        blackpink: 'Jennie',
        gidle: 'Yuqi',
        aespa:'Ningning',
      },
      name => name==='Yuqi'
    ),'gidle'); 
  });
});