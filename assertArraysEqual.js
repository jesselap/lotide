
const assertArraysEqual = function(array1, array2) {
  let match = true;
  for (let i of array1) {
    for (let j of array2) {
      if (array1[i] !== array2[j]) {
        match = false;
      }
    }
  }
  if (!match) {
    console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log( `🟢🟢🟢 Assertion Passed: ${array1} === ${array2}`);
  }
};
