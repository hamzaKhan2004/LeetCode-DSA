/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let n = mat.length;
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i == j){
                primaryDiagonal += mat[i][j];
            }else if((i+j) === n - 1){
                secondaryDiagonal += mat[i][j];
            }
        }
    }
    return primaryDiagonal + secondaryDiagonal;
};