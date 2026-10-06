/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // Hash Method
    // let map = new Map();

    // for(let i = 0; i < nums.length; i++){
    //     if(!map.has(nums[i])){
    //         map.set(nums[i],1);
    //     }else{
    //         map.set(nums[i],map.get(nums[i]) + 1);
    //     }
    // }

    // for(let [key,value] of map){
    //     if(value >= 2){
    //         return key;
    //     }
    // }

    // Fast And Slow Pointer
    let slow = 0;
    let fast = 0;
    while(true){
        slow = nums[slow];
        fast = nums[fast];
        fast = nums[fast];
        if(slow == fast){
            slow = 0;
            while(slow != fast){
                slow = nums[slow];
                fast = nums[fast];
            }
            return slow;
        }
    }
    
};