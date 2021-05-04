const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  let values = Object.values(object);
  let answer = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] === value) {
      answer.push(keys[i]);
    }
  }
  if (answer.length < 2) {
    answer = answer.join('');
  }
  return answer;
};

module.exports = findKeyByValue;