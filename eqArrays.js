const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
