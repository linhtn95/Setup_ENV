const assert = require('assert');
const booWho = require('../BooWho');

describe('Boolean', () => {
  describe('function booWho(true)', () => {
    it('should return true', () => {
      assert.equal(
        booWho(true),
        true,
      );
    });
  });
});

describe('Boolean', () => {
  describe('function booWho(true)', () => {
    it('should return true', () => {
      assert.equal(
        booWho(false),
        true,
      );
    });
  });
});

describe('Boolean', () => {
  describe('function booWho(true)', () => {
    it('should return true', () => {
      assert.equal(
        booWho([1, 2, 3]),
        false,
      );
    });
  });
});

describe('Boolean', () => {
  describe('function booWho(true)', () => {
    it('should return true', () => {
      assert.equal(
        booWho([].slice),
        false,
      );
    });
  });
});

describe('Boolean', () => {
  describe('function booWho(true)', () => {
    it('should return true', () => {
      assert.equal(
        booWho({ 'a': 1 }),
        false,
      );
    });
  });
});

describe('Boolean', () => {
  describe('function booWho(true)', () => {
    it('should return true', () => {
      assert.equal(
        booWho(1),
        false,
      );
    });
  });
});

describe('Boolean', () => {
  describe('function booWho(true)', () => {
    it('should return true', () => {
      assert.equal(
        booWho(NaN),
        false,
      );
    });
  });
});

describe('Boolean', () => {
  describe('function booWho(true)', () => {
    it('should return true', () => {
      assert.equal(
        booWho('a'),
        false,
      );
    });
  });
});

describe('Boolean', () => {
  describe('function booWho(true)', () => {
    it('should return true', () => {
      assert.equal(
        booWho('true'),
        false,
      );
    });
  });
});

describe('Boolean', () => {
  describe('function booWho(true)', () => {
    it('should return true', () => {
      assert.equal(
        booWho('false'),
        false,
      );
    });
  });
});
