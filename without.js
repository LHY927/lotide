/**
 * Return an array that remove variables which been included in itemsToRemove from the target array.
 *
 * @param {Array} source The target array.
 * @param {FuArraynction} itemsToRemove The list for items to be removed.
 * @return {Array} The output array.
 */
const without = function(source, itemsToRemove) {
    let result = [];
    for (let i = 0; i < source.length; i++){
        if(!itemsToRemove.includes(source[i])){
            result.push(source[i]);
        }
    }
    return result;
}

module.exports = without;