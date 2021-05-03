const eqArrays = function(array1, array2) {
  let match = true;
  for (let i of array1) {
    if (array1[i] !== array2[i]) {
      match = false;
      
    }
  }
  return match;
};



module.exports = eqArrays;