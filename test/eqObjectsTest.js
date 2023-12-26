// TEST CODE for eqObjects.js
const assert = require('chai').assert;
const eqObjects = require('../eqObjects.js');

describe("#eqObjects", () => {
  const shirtObject = { color: 'red', size: 'medium'};
  const anotherShirtObject= { size: 'medium', color: 'red'};
  const longSleeveShirtObject= { size: 'medium', color: 'red', sleeveLength: 'long'};
  it("returns true for { color: 'red', size: 'medium'}, { size: 'medium', color: 'red'}", () => {
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });
  it("returns 'false' for { color: 'red', size: 'medium'}, { size: 'medium', color: 'red', sleeveLength: 'long'}", () => {
    assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject)); 
  });
});