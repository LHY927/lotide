/**
 * Count the number of letters and return as an object.
 *
 * @param {String} text The string for counting letters.
 * @return {Object} Result of counting as an object.
 */
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