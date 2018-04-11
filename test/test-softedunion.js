const assert = require('assert');
const uniteUnique = require('../SortedUnion');


describe('Array', () => {
  describe('function uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])', () => {
    it('should return [1, 3, 2, 5, 4]', () => {
      assert.equal(
        JSON.stringify(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])),
        JSON.stringify([1, 3, 2, 5, 4])
      );
    });
  });
});

describe('Array', () => {
  describe('function uniteUnique([1, 3, 2], [1, [5]], [2, [4]])', () => {
    it('should return [1, 3, 2, [5], [4]]', () => {
      assert.equal(
        JSON.stringify(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])),
        JSON.stringify([1, 3, 2, [5], [4]])
      );
    });
  });
});

describe('Array', () => {
  describe('function uniteUnique([1, 2, 3], [5, 2, 1])', () => {
    it('should return [1, 2, 3, 5]', () => {
      assert.equal(
        JSON.stringify(uniteUnique([1, 2, 3], [5, 2, 1])),
        JSON.stringify([1, 2, 3, 5])
      );
    });
  });
});

describe('Array', () => {
  describe('function uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])', () => {
    it('should return [1, 2, 3, 5, 4, 6, 7, 8]', () => {
      assert(
        JSON.stringify(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])),
        JSON.stringify([1, 2, 3, 5, 4, 6, 7, 8])
      );
    });
  });
});
