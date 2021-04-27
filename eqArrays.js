const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`;
  }
};

const eqArrays = function(array1, array2) {
  for (let index of array1) {
    for (let index of array2) {
      if (array1[index] !== array2[index]) {
        return false;
      }
    }
  }
  return true;
};


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true))
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)) 

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true))
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false))