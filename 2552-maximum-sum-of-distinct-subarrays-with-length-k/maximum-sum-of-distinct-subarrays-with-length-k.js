/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let max = 0;
    let currentSum = 0;
    let left = 0;
    let set = new Set();

    for (let right = 0; right < nums.length; right++) {
        while (set.has(nums[right])) {
            set.delete(nums[left]);
            currentSum -= nums[left];
            left++;
        }

        set.add(nums[right]);
        currentSum += nums[right];

        if (right - left + 1 === k) {
            max = Math.max(max, currentSum);

            set.delete(nums[left]);
            currentSum -= nums[left];
            left++;
        }
    }

    return max;
};