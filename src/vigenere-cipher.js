const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	constructor(machine = true) {
    this.machine = machine;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  }

  vigenereCiphering(data, key, encrypt) {
    let count = 0;
    let res = '';

    for (let i = 0; i < data.length; i++) {
      const el = data[i].toUpperCase();

      if (this.alphabet.includes(el)) {
        const elIndex = this.alphabet.indexOf(el);
        const elKey = key[count % key.length].toUpperCase();
        const alfa = this.alphabet.indexOf(elKey);
        let alfaIndex;

				if (encrypt) {
					alfaIndex = (elIndex + alfa) % 26;
				} else {
					alfaIndex = (elIndex - alfa + 26) % 26;
				}

        res += this.alphabet[alfaIndex];
        count++;
      } else {
        res += el;
      }
    }

    return res;
  }

	parameter(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
  }

  encrypt(message, key) {
    this.parameter(message, key);
    const solve = this.vigenereCiphering(message, key, true);

		if (this.machine) {
			return solve;
		} else {
			return solve.split('').reverse().join('');
		}
  }

  decrypt(encMessage, key) {
    this.parameter(encMessage, key);
    const solve = this.vigenereCiphering(encMessage, key, false);
		
		if (this.machine) {
			return solve;
		} else {
			return solve.split('').reverse().join('');
		}
  }
}

module.exports = {
  VigenereCipheringMachine
};
