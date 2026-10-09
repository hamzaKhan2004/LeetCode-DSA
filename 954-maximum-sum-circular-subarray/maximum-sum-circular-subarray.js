/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let minEnd = nums[0];
    let maxEnd = nums[0];

    let maxSum = nums[0];
    let minSum = nums[0];
    let totalSum = nums[0];
    for(let i = 1; i < nums.length; i++){
        let val = nums[i];

        maxEnd = Math.max(val,maxEnd + val);
        minEnd = Math.min(val,minEnd + val);

        maxSum = Math.max(maxSum,maxEnd);
        minSum = Math.min(minSum,minEnd);
        totalSum += val;
    }

    if(maxSum < 0){
        return maxSum;
    }

    return Math.max(maxSum,totalSum - minSum);
};