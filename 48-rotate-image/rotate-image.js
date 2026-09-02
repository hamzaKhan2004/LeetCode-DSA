/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let temp = [];
    let size = matrix.length;
    for (let row = 0; row < size; row++) {
        temp[row] = [];
        for (let col = 0; col < size; col++) {
            temp[row][col] = matrix[col][row];
        }
    }

    for (let i = 0; i < size; i++) {
        let left = 0;
        for (let right = temp[i].length - 1; right >= 0; right--) {
            matrix[i][left] = temp[i][right];
            left++;
        }
    }
};