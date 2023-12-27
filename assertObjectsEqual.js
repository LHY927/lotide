const eqObjects = require('./eqObjects');

/**
 * Returns whether two objects are same and log the result.
 *
 * @param {Object} actual The first object for compare.
 * @param {Object} expected The second object for compare.
 * @return {Boolean} return ture if two params are same, otherwise return false.
 */
const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect
    if(eqObjects(actual,expected)){
        console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
        return true;
    }else{
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
        return false;
    }
  };

module.exports = assertObjectsEqual;