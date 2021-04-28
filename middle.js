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


const middle = function(array) {
  let midIndex = Math.floor(array.length/2);
  let newArray = [];
  let len = array.length;
  if (len < 3) {
    return newArray;
  } else if (len % 2 !== 0) {
    newArray.push(array[midIndex]);
    return newArray;
  } else {
    newArray.push(array[midIndex - 1], array[midIndex]);
    return newArray;
  }
};

console.log(assertArraysEqual(middle([1]), []))
console.log(assertArraysEqual(middle([1, 2]), []))
console.log(assertArraysEqual(middle([1, 2, 3]), [2]))
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]))
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]))
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]))

console.log(middle([1])); // => []
console.log(middle([1, 2]));// => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]