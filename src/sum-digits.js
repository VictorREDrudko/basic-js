const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = String(n);
  let arr = str.split('');

  let sum = 0;
  arr.forEach(el => {
    sum += Number(el)
  })

  if (sum >= 10) {
    str = String(sum);
    arr = str.split('');

    sum = 0;
    arr.forEach(el => {
    sum += Number(el)
    })
  }

  return sum;
}

module.exports = {
  getSumOfDigits
};
