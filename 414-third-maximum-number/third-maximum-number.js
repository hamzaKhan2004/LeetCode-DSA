/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let firstMax = -Infinity;
    let secondMax = -Infinity;
    let thirdMax = -Infinity;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === firstMax || nums[i] === secondMax || nums[i] === thirdMax){
            continue;
        }
        if(firstMax < nums[i]){
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = nums[i];
        }else if(nums[i] < firstMax && nums[i] > secondMax){
            thirdMax = secondMax;
            secondMax = nums[i];
        }else if(nums[i] < secondMax && thirdMax < nums[i]){
            thirdMax = nums[i];
        }
    }
    
    return thirdMax === -Infinity ? firstMax : thirdMax;
};