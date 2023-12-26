// TEST CODE for assertObjectsEqual.js
const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

describe("#assertObjectsEqual", () => {
  const shirtObject = { color: 'red', size: 'medium'};
  const anotherShirtObject= { size: 'medium', color: 'red'};
  const longSleeveShirtObject= { size: 'medium', color: 'red', sleeveLength: 'long'};

  it("returns true for { color: 'red', size: 'medium'}, { size: 'medium', color: 'red' }", () => {
    assert.isTrue(assertObjectsEqual(shirtObject , anotherShirtObject));
  });
  it("returns 'false' for { color: 'red', size: 'medium'}, { size: 'medium', color: 'red', sleeveLength: 'long'}", () => {
    assert.isFalse(assertObjectsEqual(shirtObject , longSleeveShirtObject)); 
  });
});