const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	const resObj = {};
  const resArr = [];
  domains.forEach((el) => {
    const array = el.split('.');
    array.reverse();
      let str = '';
    array.forEach(item => {
      str += `.${item}`;
      resArr.push(str);

      if(resObj.hasOwnProperty(str)) {
        resObj[str] += 1;
      } else {
        resObj[str] = 1;
      }
    })
  })

    return resObj;
}

module.exports = {
  getDNSStats
};
