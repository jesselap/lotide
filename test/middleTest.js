const middle = require('../middle.js');
const assert = require('chai').assert;

describe('#middle', function() {
  it("should return [] for [1]", function() {
    assert.deepEqual(middle([1]), []);
  });
  it("should return return [] for [1, 2]", function() {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return [2] for [1, 2, 3]", function() {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return [2, 3]) for [1, 2, 3, 4]", function() {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});

