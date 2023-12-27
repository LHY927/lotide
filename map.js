/**
 * Map an array with the rules defined by the callback function.
 *
 * @param {Array} array The target array.
 * @param {Function} callback The fallback function to return the mapped value.
 * @return {Array} The mapped array.
 */
const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
}

module.exports = map;
  