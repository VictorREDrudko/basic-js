const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length !== 0) {
    throw new Error('Invalid date!');
  }

  const monthDate = date.getMonth();

  if (monthDate > 1 && monthDate < 5) {
    return 'spring';
  }
  if (monthDate > 4 && monthDate < 8) {
    return 'summer';
  }
  if (monthDate > 7 && monthDate < 11) {
    return 'autumn';
  }
  return 'winter';
}

module.exports = {
  getSeason
};
