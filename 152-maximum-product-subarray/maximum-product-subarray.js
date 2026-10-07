/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let ans = nums[0];
    let maxProduct = nums[0];
    let minProduct = nums[0];

    for(let i = 1; i < nums.length; i++){
        let v1 = nums[i];
        let prevMax = maxProduct * v1;
        let prevMin = minProduct * v1;

        maxProduct = Math.max(v1, Math.max(prevMax,prevMin));
        minProduct = Math.min(v1, Math.min(prevMax,prevMin));
        ans = Math.max(ans,Math.max(maxProduct,minProduct));
    }
    return ans;
};