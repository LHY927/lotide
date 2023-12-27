/**
 * Returns whether two value are same and log the result.
 *
 * @param {var} actual The first variable for compare.
 * @param {var} expected The second variable for compare.
 * @return {Boolean} return ture if two params are same, otherwise return false.
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌Assertion failed: ${actual} !== ${expected}`);
    return false;
  }
};

module.exports = assertEqual;