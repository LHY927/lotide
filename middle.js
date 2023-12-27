/**
 * Return the variable in the middle of the array, return two values if the array have an even length.
 *
 * @param {Array} arr The target array.
 * @return {Array} The middle value, length 1 if target array is odd length, 2 if even length.
 */
const middle = function(arr){
    let middleArr = [];
    if(arr.length>2){
        if(arr.length%2 === 0){
            middleArr = [arr[arr.length/2-1],arr[arr.length/2]];
        }else if (arr.length%2 === 1){
            middleArr = [arr[Math.floor(arr.length/2)]];
        }
    }
    return middleArr;
}

module.exports = middle;