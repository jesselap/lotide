const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`;
  }
};

const countLetters = function(string) {
  const noSpaces = string.split(" ").join("");
  const results = {};
  for (let char of noSpaces) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
  return results;
};



const result1 = countLetters("lighthouse in the house");





console.log(assertEqual(result1["l"], 1));
console.log(assertEqual(result1["i"], 2));
console.log(assertEqual(result1["g"], 1));
console.log(assertEqual(result1["h"], 4));
console.log(assertEqual(result1["t"], 2));
console.log(assertEqual(result1["o"], 2));
console.log(assertEqual(result1["u"], 2));
console.log(assertEqual(result1["s"], 2));
console.log(assertEqual(result1["e"], 3));
console.log(assertEqual(result1["n"], 1));