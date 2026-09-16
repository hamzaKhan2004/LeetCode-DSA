/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b) => a - b);
    
    let result = 0;
    let maxDifference = Infinity;

    for(let i = 0; i < nums.length - 2; i++){
        let left = i + 1;
        let right = nums.length - 1;

        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];
            let diff = Math.abs(sum - target);

            if(maxDifference > diff){
                maxDifference = diff;
                result = sum;
            }
            
            if(sum === target){
                return sum;
            }else if(sum < target){
                left++;
            }else{
                right--;
            }
        }
    }
    return result;

};