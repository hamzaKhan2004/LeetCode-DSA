/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let maxEnding = nums[0];
    let minEnding = nums[0];
    let maxSum = nums[0];
    let minSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let val = nums[i];

        maxEnding = Math.max(val, maxEnding + val);
        minEnding = Math.min(val, minEnding + val);

        maxSum = Math.max(maxSum, maxEnding);
        minSum = Math.min(minSum, minEnding);
    }

    return Math.max(Math.abs(maxSum), Math.abs(minSum));
};