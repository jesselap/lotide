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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual !== expected) {
    return `🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  } else {
    return `🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(eqObjects(cd, dc), true));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(eqObjects(cd, cd2), false));

