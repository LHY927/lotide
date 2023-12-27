const eqArrays = require('./eqArrays');
/**
 * Returns whether two arrays are same and log the result.
 *
 * @param {Array} actual The first array for compare.
 * @param {Array} expected The second array for compare.
 * @return {Boolean} return ture if two params are same, otherwise return false.
 */
const assertArraysEqual = function(actual, expected){
    // flag result for wether the actual and expected arrays are equal or not
    let flag = eqArrays(actual, expected);
    if (flag === true){
        console.log(`✅Assertion passed: ${actual} === ${expected}`);
        return true;
    }else{
        console.log(`❌Assertion failed: ${actual} !== ${expected}`);
        return false;
    }
}

module.exports = assertArraysEqual;
