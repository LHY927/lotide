const eqArrays = function (actual, expected) {
    let flag = true;
    if (actual.length !== expected.length) {
      flag = false;
    }
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        flag = false;
      }
    }
    if (flag === false){
        console.log(`❌Assertion failed: ${actual} !== ${expected}`);
    }else{
        console.log(`✅Assertion passed: ${actual} === ${expected}`);
    }
}

eqArrays([1,2,3],[1,2,3]);
eqArrays([1,2,'3'],[1,2,3]);
eqArrays(['a','b','c'],['a','b','c']);