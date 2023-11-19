const tail = function (array){
    let tail = [];
    if (array.length <= 1){
        tail = [];
    }else{
        tail = array.slice(1);
    }
    return tail;
}
