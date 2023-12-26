// TEST CODE for findKeyByValue.js
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue.js');

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = { 
        sci_fi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama:  "The Wire"
      };
      
  it("returns 'drama' for { \nsci_fi: 'The Expanse', \ncomedy: 'Brooklyn Nine-Nine', \ndrama:  'The Wire'\n}, 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined for { \nsci_fi: 'The Expanse', \ncomedy: 'Brooklyn Nine-Nine', \ndrama:  'The Wire'\n}, 'That '70s Show''", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 
  });
});