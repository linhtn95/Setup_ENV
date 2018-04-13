function spinalCase(str) {
  let newStr = '';
  newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  newStr = newStr.replace(/([^a-z])/g, '-');

  return newStr;
}
spinalCase('The_Andy_Griffith_Show');

module.exports = spinalCase;
