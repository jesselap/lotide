
const assertArraysEqual = function(array1, array2) {
  let match = true;
  for (let index of array1) {
    for (let index of array2) {
      if (array1[index] !== array2[index]) {
        match = false;
      }
    }
  }
  if (!match) {
    console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log( `🟢🟢🟢 Assertion Passed: ${array1} === ${array2}`);
  }
}

assertArraysEqual([1, 2], [1, 2, 3]);