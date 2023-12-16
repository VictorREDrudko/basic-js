const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrayS1 = s1.split('');
  let arrayS2 = s2.split('');
  let count = 0;

  arrayS1.forEach(el => {
		if (arrayS2.indexOf(el) !== -1) {
			count = count + 1;
			delete arrayS2[arrayS2.indexOf(el)];
			console.log(arrayS2);
		}
  })

  return count;
}

module.exports = {
  getCommonCharacterCount
};
