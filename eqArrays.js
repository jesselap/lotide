
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

