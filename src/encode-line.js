const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  count = 1;
  let res = '';

  for(let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    }
    if (str[i] !== str[i + 1]) {
      if (count > 1) {
      res = res + `${count}${str[i]}`;
      count = 1;
      } else {
        res = res + `${str[i]}`;
        count = 1;
      }
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
