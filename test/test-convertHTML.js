const assert = require('assert');
const convertHTML = require('../convertHTML');

describe('String', () => {
  describe('function convertHTML("Dolce & Gabbana")', () => {
    it('should return Dolce &​amp; Gabbana', () => {
      assert.equal(convertHTML('Dolce & Gabbana'), 'Dolce &amp; Gabbana');
    });
  });
});

describe('String', () => {
  describe('function convertHTML("Hamburgers < Pizza < Tacos")', () => {
    it('should return Hamburgers &​lt; Pizza &​lt; Tacos', () => {
      assert.equal(
        convertHTML('Hamburgers < Pizza < Tacos'),
        'Hamburgers &lt; Pizza &lt; Tacos',
      );
    });
  });
});

describe('String', () => {
  describe('function convertHTML("Sixty > twelve")', () => {
    it('should return Sixty &​gt; twelve', () => {
      assert.equal(convertHTML('Sixty > twelve'), 'Sixty &gt; twelve');
    });
  });
});

describe('String', () => {
  describe('function convertHTML(`Stuff in "quotation marks"`)', () => {
    it('should return Stuff in &​quot;quotation marks&​quot;', () => {
      assert.equal(
        convertHTML('Stuff in "quotation marks"'),
        'Stuff in &quot;quotation marks&quot;',
      );
    });
  });
});

describe('String', () => {
  describe('function convertHTML("Shindler\'s List")', () => {
    it('should return Shindler&​apos;s List', () => {
      assert.equal(convertHTML("Shindler's List"), 'Shindler&apos;s List');
    });
  });
});

describe('String', () => {
  describe('function convertHTML("<>")', () => {
    it('should return &​lt;&​gt;', () => {
      assert.equal(convertHTML('<>'), '&lt;&gt;');
    });
  });
});

describe('String', () => {
  describe('function convertHTML("abc")', () => {
    it('should return abc', () => {
      assert.equal(convertHTML('abc'), 'abc');
    });
  });
});
