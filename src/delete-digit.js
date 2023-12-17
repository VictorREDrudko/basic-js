const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  const arrVar = [];

  for(let i = 0; i < str.length; i++) {
    let element = str.replace(str[i], '');
    arrVar.push(+element);
  }

  arrVar.sort((a, b) => {
    return b - a;
  });

  return arrVar[0];
}

module.exports = {
  deleteDigit
};
