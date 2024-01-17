/**
 * Returns whether two arrays are same.
 *
 * @param {Array} actual The first array for compare.
 * @param {Array} expected The second array for compare.
 * @return {Boolean} return ture if two params are same, otherwise return false.
 */
const eqArrays = function (actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
