const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arrayDataMAC = n.split('-');
  const reg = /([a-f0-9]+)/gi;

  if(arrayDataMAC.length !== 6) {
    return false;
  }
 
  return arrayDataMAC.every(
    el => el.length === 2 && el[0].match(reg) && el[1].match(reg)
  );
}
module.exports = {
  isMAC48Address
};
