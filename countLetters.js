const countLetters = function(text){
    const result = {};
    for(const letter of text){
        if(result[letter]){
            result[letter] += 1;
        }else{
            result[letter] = 1;
        }
    }
    return result;
}

module.exports = countLetters;