const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual !== expected) {
    return `🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  } else {
    return `🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  }
};

module.exports = assertObjectsEqual;