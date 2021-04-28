


const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  let values = Object.values(object);
  for (let i = 0; i < values.length; i++) {
    if (values[i] === value) {
      return keys[i];
    }
  }
};





const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));