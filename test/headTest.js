const head = require('../head.js');
const assert = require('chai').assert;



describe('#head', function() {
  it('should return 1 for [1, 2, 3]', function() {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("should return '5' for ['5']", function() {
    assert.strictEqual(head(['5']), '5');
  });
  it("should return 'Yo Yo' for ['Yo Yo', 'Lighthouse', 'Labs']", function() {
    assert.strictEqual(head(["Yo Yo", "Lighthouse", "Labs"]), "Yo Yo");
  });
});