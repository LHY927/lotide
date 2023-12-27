/**
 * Return the first variable of an array.
 *
 * @param {Array} array The target array.
 * @return {var} return first variable of the target array, return undefined if it's an empty array.
 */
const head = function(array){
    if (array.length===0){
        return undefined;
    }else{
        return array[0];
    }
}

module.exports = head;