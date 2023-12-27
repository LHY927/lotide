/**
 * Count the number of letters within a specific set and return as an object.
 *
 * @param {Array} allItems Array of strings that we need to look through.
 * @param {Object} itemsToCount Object specifying what to count.
 * @return {Object} Result of counting as an object.
 */
const countOnly = function(allItems, itemsToCount) {
    const results = {};

    for (const item of allItems) {
        if (itemsToCount[item]) { 
            if (results[item]) {
              results[item] += 1;
            } else {
              results[item] = 1;
            }
          }
    }
  
    return results;
  }

module.exports = countOnly;