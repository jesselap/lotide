const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`;
  }
};

const eqArrays = function(array1, array2) {
  for (let i of array1) {
    for (let j of array2) {
      if (array1[i] !== array2[j]) {
        return false;
      }
    }
  }
  return true;
};


const eqObjects = function(object1, object2) {
  let len1 = Object.keys(object1).length;
  let len2 = Object.keys(object2).length;
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (len1 === len2) {
    for (let key of keys1) {
      if (Array.isArray(keys1[key]) && Array.isArray(keys2[key])) {
        if (keys1[key].length === keys2[key].length) {
          return eqArrays(keys1[key], keys2[key]);
        }
      } else if (object1[key].length !== object2[key].length) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true
const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false)); // => false