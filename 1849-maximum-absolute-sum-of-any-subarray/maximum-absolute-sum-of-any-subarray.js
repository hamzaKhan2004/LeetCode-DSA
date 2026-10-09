/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let maxEnding = 0;
    let minEnding = 0;
    let maxSum = 0;
    let minSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];

        maxEnding = Math.max(0, maxEnding + val);
        minEnding = Math.min(0, minEnding + val);

        maxSum = Math.max(maxSum, maxEnding);
        minSum = Math.min(minSum, minEnding);
    }

    return Math.max(maxSum, Math.abs(minSum));
};