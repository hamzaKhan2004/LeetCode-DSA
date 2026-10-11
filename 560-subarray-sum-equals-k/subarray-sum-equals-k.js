/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map();
    map.set(0,1);
    let sum = 0;
    let result = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        let ques = sum - k;
        let freq = map.get(ques) || 0;
        result += freq;
        map.set(sum,(map.get(sum) || 0) + 1);
    }
    return result;
};