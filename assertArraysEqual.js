const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(array1, array2) {
  let match = eqArrays(array1, array2);
  if (!match) {
    console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log( `🟢🟢🟢 Assertion Passed: ${array1} === ${array2}`);
  }
};

module.exports = assertArraysEqual;