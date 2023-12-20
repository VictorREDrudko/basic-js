const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const disNext = '--discard-next';
  const disPrev = '--discard-prev';
  const doubNext = '--double-next';
  const doubPrev = '--double-prev';
  const arr2 = arr.slice(0);
  const resArr = [];

  arr2.forEach((el, index) => {
    if(el !== disNext && el !== disPrev && el !== doubNext && el !== doubPrev && el !== null) {
      resArr.push(el);
    }
    if(el === disNext) {
      arr2[index + 1] = null;
    }
    if(el === disPrev) {
			if(arr2[index - 1] !== null) {
        resArr.pop();
      }
    }
    if(el === doubNext) {
      if (arr2[index + 1] !== undefined && arr2[index - 1] !== null) {
        resArr.push(arr2[index + 1]);
      }
    }
    if(el === doubPrev) {
      if(arr2[index - 1] !== undefined && arr2[index - 1] !== null) {
        resArr.push(arr2[index - 1]);
      }
    }
  })

  return resArr;
}

module.exports = {
  transform
};
