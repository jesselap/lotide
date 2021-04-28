
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