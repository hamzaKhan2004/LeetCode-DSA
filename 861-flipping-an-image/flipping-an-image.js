/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let result = [];
    for(let i = 0; i < image.length;i++){
        result[i] = [];
        for(let right = image.length - 1; right >= 0;right--){
            result[i][image[i].length - 1 - right] =
            image[i][right] === 1 ? 0 : 1;
        }
    }
    return result;
};