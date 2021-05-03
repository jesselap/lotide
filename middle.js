const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = middle;


// console.log(middle([1])); // => []
// console.log(middle([1, 2]));// => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]