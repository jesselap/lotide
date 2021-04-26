const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`;
  } else {
    return `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`;
  }
};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));