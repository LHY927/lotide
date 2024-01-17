/**
 * Flatten multi-dimension array into a one-dimension array.
 *
 * @param {Array} array The target array for flatten, might include multi-dimension.
 * @return {Array} return flattened array with one dimension.
 */
const flatten = function(array){
    let finalArr = [];
    for(let i = 0; i< array.length; i++){
        if(Array.isArray(array[i])){
            finalArr = finalArr.concat(flatten(array[i]));
        }else{
            finalArr.push(array[i]);
        }
    }
    return finalArr;
}

module.exports = flatten;