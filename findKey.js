/**
 * Finding the key within an object according to the result returned by the callback function.
 *
 * @param {Object} object1 The target object for finding the key.
 * @param {Function} callback The callback function to return whether the key is the target key or not.
 * @return {var} return the key if we found it, otherwise return undefined.
 */
const findKey = function (object1, callback) {
  const keys = Object.keys(object1);
  for (const key of keys) {
    if (callback(object1[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;