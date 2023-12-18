const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let str2 = '';

  if(options.addition !== undefined) {
      if (options.additionSeparator === undefined) {
        options.additionSeparator = '|'
      }
      let str1 = `${options.addition}`;
      if (options.additionRepeatTimes > 1) {
        for(let i = 0; i < options.additionRepeatTimes; i++) {
          if (options.additionRepeatTimes === i + 1) {
            str2 = str2 +str1;
          } else {
            str2 += str1 + options.additionSeparator;
          }
        }
      }
      if (options.additionRepeatTimes === 1 || options.additionRepeatTimes === undefined) {
        str2 = str1;
      }
  }
  if (options.separator === undefined) {
        options.separator = '+'
  }
    
  let str3 = '';
  if (options.repeatTimes > 1) {
    for(let i = 0; i < options.repeatTimes; i++) {
      if (options.repeatTimes === i + 1) {
        str3 = str3 + str + str2;
      } else {
        str3 += str + str2 + options.separator;
      }
    }
  }
  if (options.repeatTimes === 1 || options.repeatTimes === undefined) {
      str3 = str + str2;
  }

  return str3; 
}

module.exports = {
  repeater
};
