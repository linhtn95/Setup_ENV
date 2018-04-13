const assert = require('assert');
const spinalCase = require('../spinalTapCase');

describe('String', () => {
  describe('function spinalCase("This Is Spinal Tap")', () => {
    it('should return "this-is-spinal-tap"', () => {
      assert.equal(spinalCase('This Is Spinal Tap'), 'this-is-spinal-tap');
    });
  });
});

describe('String', () => {
  describe('function spinalCase("thisIsSpinalTap")', () => {
    it('should return "this-is-spinal-tap"', () => {
      assert.equal(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap');
    });
  });
});

describe('String', () => {
  describe('function spinalCase("The_Andy_Griffith_Show")', () => {
    it('should return "the-andy-griffith-show"', () => {
      assert.equal(
        spinalCase('The_Andy_Griffith_Show'),
        'the-andy-griffith-show',
      );
    });
  });
});

describe('String', () => {
  describe('function spinalCase("Teletubbies say Eh-oh")', () => {
    it('should return "teletubbies-say-eh-oh"', () => {
      assert.equal(
        spinalCase('Teletubbies say Eh-oh'),
        'teletubbies-say-eh-oh',
      );
    });
  });
});

describe('String', () => {
  describe('function spinalCase("AllThe-small Things")', () => {
    it('should return "all-the-small-things"', () => {
      assert.equal(spinalCase('AllThe-small Things'), 'all-the-small-things');
    });
  });
});
