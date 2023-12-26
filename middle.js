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