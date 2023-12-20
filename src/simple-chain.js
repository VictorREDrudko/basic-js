const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arrayChain: [],

  getLength() {
    return chainMaker.arrayChain.length;
  },
    
  addLink(value) {
    if(value === '') {
      value = '( )'
    };
    chainMaker.arrayChain.push(`( ${value} )`);
    return chainMaker;
  },
    
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position < 1 || position > chainMaker.arrayChain.length) {
      chainMaker.arrayChain = [];
      throw new Error("You can't remove incorrect link!");
    }

    chainMaker.arrayChain.splice(position-1, 1);
    return chainMaker;
  },
    
  reverseChain() {
    chainMaker.arrayChain.reverse();
    return chainMaker;
  },
    
  finishChain() {
    let res = chainMaker.arrayChain.join('~~');
    chainMaker.arrayChain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
