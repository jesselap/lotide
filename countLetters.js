const countLetters = function(string) {
  const noSpaces = string.split(" ").join("");
  const results = {};
  for (let char of noSpaces) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
  return results;
};

module.exports = countLetters;