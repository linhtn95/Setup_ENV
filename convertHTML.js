function convertHTML(str) {
  const character = ['&', '<', '>', '"', "'"];
  const entity = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'];
  for (let i = 0; i < character.length; i += 1) {
    const c = new RegExp(character[i], 'gi');
    str = str.replace(c, entity[i]);
  }
  return str;
}

convertHTML('<>');

module.exports = convertHTML;
