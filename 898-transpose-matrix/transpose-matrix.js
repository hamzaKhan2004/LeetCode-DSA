/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let transpose = [];
    for (let i = 0; i < col; i++) {
        transpose[i] = [];
        for (let j = 0; j < row; j++) {
            transpose[i][j] = matrix[j][i];
        }
    }
    return transpose;
};