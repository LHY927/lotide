/**
 * Return an array that took variable from the target array according to the rules set by the callback function.
 *
 * @param {Array} array The target array.
 * @param {Function} callback The callback function, take item from array as param and return true for continue, false for stop.
 * @return {Array} The output array.
 */
const takeUntil = function(array, callback) {
    // defined result variable
    const results =[];
    for(const item of array){
        if(callback(item)){
            // take item until callback returns false
            return results;
        }
        results.push(item);
    }
    return results;
  }

module.exports = takeUntil;