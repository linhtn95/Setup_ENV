function uniteUnique(...arr) {
  const set = new Set();
  const newArr = Array.prototype.concat(...arr);

  newArr.forEach((e) => {
    set.add(e);
  });
  return Array.from(set);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

module.exports = uniteUnique;
