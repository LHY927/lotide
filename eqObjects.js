const eqArrays = require('./eqArrays');

/**
 * Returns whether two objects are same.
 *
 * @param {Object} actual The first object for compare.
 * @param {Object} expected The second object for compare.
 * @return {Boolean} return ture if two params are same, otherwise return false.
 */
const eqObjects = function(object1, object2) {
    if(Object.keys(object1).length !== Object.keys(object2).length){
        return false;
    }
    for(const item in object1){
        if(Array.isArray(object1[item]&&Array.isArray(object2[item]))){
            if(!eqArrays(object1[item],object2[item])){
                return false;
            }
        }else if(object2[item]!==object1[item]){
            return false;
        }
    }
    return true;
};

module.exports = eqObjects;
