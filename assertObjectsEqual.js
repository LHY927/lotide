const eqArrays = function(array1, array2){
    if(array1.length != array2.length){
        return false
    }
    for(let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i]){
            return false;
        }
    }
    return true;
};

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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
    // Implement me!
    const inspect = require('util').inspect
    if(eqObjects(actual,expected)){
        console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    }else{
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };

  const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertObjectsEqual(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject , longSleeveShirtObject); // => false