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
 
module.exports = eqObjects;