/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // nums.sort((a, b) => a - b);

    // const ans = [];

    // for (let i = 0; i < nums.length - 2; i++) {

    //     if (i > 0 && nums[i] === nums[i - 1]) continue;

    //     let target = -nums[i];
    //     let left = i + 1;
    //     let right = nums.length - 1;

    //     while (left < right) {

    //         let sum = nums[left] + nums[right];

    //         if (sum === target) {

    //             ans.push([nums[i], nums[left], nums[right]]);

    //             while (left < right && nums[left] === nums[left + 1]) {
    //                 left++;
    //             }

    //             while (left < right && nums[right] === nums[right - 1]) {
    //                 right--;
    //             }

    //             left++;
    //             right--;

    //         } else if (sum < target) {
    //             left++;
    //         } else {
    //             right--;
    //         }
    //     }
    // }

    nums.sort((a,b) => a - b);
    const ans = [];
    for(let i = 0; i < nums.length - 2; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue;

        let target = -nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){

            let sum = nums[left] + nums[right];
            
            if(sum === target){
                ans.push([nums[left],nums[right],nums[i]]);

                while(left < right && nums[left] === nums[left + 1]){
                    left++;
                }

                while(left < right && nums[right] === nums[right - 1]){
                    right--;
                }
                left++;
                right--;
            }else if(sum < target){
                left++;
            }else{
                right--;
            }
        }
    }
    return ans;

};