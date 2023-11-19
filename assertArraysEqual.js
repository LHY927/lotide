const eqArrays = function (actual, expected) {
    let flag = true;
    if (actual.length !== expected.length) {
      return false;
    }
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        flag = false;
      }
    }
    return flag;
  };

const assertArraysEqual = function(actual, expected){
    let flag = eqArrays(actual,expected);
    if (flag === true){
        console.log(`✅Assertion passed: ${actual} === ${expected}`);
    }else{
        console.log(`❌Assertion failed: ${actual} !== ${expected}`);
    }
}
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, "3"], [1, 2, 3]);
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]);
