const without = function(source, itemsToRemove){
    let removedItems = [];
    for(let j =0; j<source.length; j++){
        let flag = true;
        for(let i = 0; i< itemsToRemove.length; i++){
            if (source[j] === itemsToRemove[i]){
                flag = false;
            }
        }
        if(flag){
            removedItems.push(source[j]);
        }
    }
    return(removedItems);
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]