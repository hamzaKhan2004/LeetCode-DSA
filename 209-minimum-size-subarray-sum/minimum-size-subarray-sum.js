/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minimum = Infinity;
    let left = 0;
    let right = 0;
    let sum = 0;
    while(right < nums.length){
        sum += nums[right];
        while(sum >= target){
            let length = right - left + 1;
            minimum = Math.min(minimum,length);
            sum = sum - nums[left]; 
            left++;
        }
        right++;
    }
    return minimum === Infinity ? 0 : minimum;
};