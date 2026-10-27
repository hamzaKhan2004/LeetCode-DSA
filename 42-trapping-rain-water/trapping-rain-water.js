/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    // let trapWater = 0;
    // for(let i = 1; i < height.length - 1; i++){

    //     let leftMax = 0;
    //     let rightMax = 0;

    //     for(let j = 0; j < i; j++){
    //         leftMax = Math.max(height[j], leftMax);
    //     }

    //     for(let j = i + 1; j < height.length; j++){
    //         rightMax = Math.max(height[j], rightMax);
    //     }

    //     trapWater += Math.max(0,Math.min(leftMax, rightMax) - height[i]);
    // }

    
    let trapWater = 0;
    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right){

        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            trapWater += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            trapWater += rightMax - height[right];
            right--;
        }

    }

    return trapWater;
    
    
};