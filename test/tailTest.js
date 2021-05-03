const tail = require('../tail.js');
const assert = require('chai').assert;


describe('#tail', function() {
  it('should return [2, 3] for [1, 2, 3]', function() {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("should return ['6'] for ['5', '6']", function() {
    assert.deepEqual(tail(['5', '6']), ['6']);
  });
  it("should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", function() {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});