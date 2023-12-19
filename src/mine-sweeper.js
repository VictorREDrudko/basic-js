const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const columns = matrix[0].length;
  const rows = matrix.length;

  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < columns; j++) {
      if (matrix[i][j] === false) {
        matrix[i][j] = 0;
      }
      if (matrix[i][j] === true) {
        if (matrix[i + 1] !== undefined) {
          if(matrix[i + 1][j] !== undefined && matrix[i + 1][j] !== true) {
           matrix[i + 1][j] += 1;
          }
          if(matrix[i + 1][j - 1] !== undefined && matrix[i + 1][j - 1] !== true) {
            matrix[i + 1][j - 1] += 1;
          }
          if(matrix[i + 1][j + 1] !== undefined && matrix[i + 1][j + 1] !== true) {
            matrix[i + 1][j + 1] += 1;
          } 
        }  

        if (matrix[i - 1] !== undefined) {
          if(matrix[i - 1][j] !== undefined && matrix[i - 1][j] !== true) {
            matrix[i - 1][j] += 1;
          }
          if(matrix[i - 1][j - 1] !== undefined && matrix[i - 1][j - 1] !== true) {
            matrix[i - 1][j - 1] += 1;
          }
          if(matrix[i - 1][j + 1] !== undefined && matrix[i - 1][j + 1] !== true) {
            matrix[i - 1][j + 1] += 1;
          }
        }
       
        if(matrix[i][j - 1] !== undefined && matrix[i][j - 1] !== true) {
          matrix[i][j - 1] += 1;
        }
        if(matrix[i][j + 1] !== undefined && matrix[i][j + 1] !== true) {
          matrix[i][j + 1] += 1;
        }
      }
    }
  }

    for(let i = 0; i < rows; i++) {
      for(let j = 0; j < columns; j++) {
          if(matrix[i][j] === true) {
            matrix[i][j] = 1;
          }
      }
    }

   return matrix; 
}

module.exports = {
  minesweeper
};
