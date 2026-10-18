/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // for(let i = 0; i < nums.length; i++){
    //     nums[i] = nums[i]**2;
    // }
    // for(let i = 0; i < nums.length - 1; i++){
    //     for(let j = 0; j < nums.length - 1 - i ;j++){
    //         if(nums[j] > nums[j+1]){
    //             let temp = nums[j];
    //             nums[j] = nums[j+1];
    //             nums[j+1] = temp;
    //         }
    //     }
    // }
    let size = nums.length - 1;
    let result = new Array(size + 1).fill(0);
    let left = 0;
    let right = size;
    let currPostion = result.length - 1;
    while(left <= right){
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];
        if(leftSquare >= rightSquare){
            result[currPostion] = leftSquare;
            left++;
        }else{
            result[currPostion] = rightSquare;
            right--;
        }
        currPostion--;
    }

    return result;
};