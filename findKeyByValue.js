/**
 * Finding the key within an object according to the value of it.
 *
 * @param {Object} object The target object for finding the key.
 * @param {var} value The target value we expected to match with one of key.
 * @return {var} return the key if we found it, otherwise return undefined.
 */
const findKeyByValue = function(object, value){
    for (const key in object) {
        if(object[key] == value){
            return key;
        }
    }
    return;
}

module.exports = findKeyByValue;