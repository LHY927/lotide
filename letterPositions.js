/**
 * Return the positions of letters in a string as an object.
 *
 * @param {String} sentence The target string.
 * @return {Object} The positions of letters in a string as an object.
 */
const letterPositions = function(sentence) {
    const results = {};
    // loop letters in the array
    for(let i = 0; i < sentence.length; i++){
        // skip spaces
        if(sentence[i] != ' '){
            if(results[sentence[i]]){
                // if there have no record for the letter, then add it to the result object
                results[sentence[i]].push(i);
            }else{
                // otherwise update the count of the letter
                results[sentence[i]] = [i];
            }
        }
    }
    return results;
  };

  module.exports = letterPositions;
 