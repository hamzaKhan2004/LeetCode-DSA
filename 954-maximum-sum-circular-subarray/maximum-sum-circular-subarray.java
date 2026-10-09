class Solution {
    public int maxSubarraySumCircular(int[] nums) {
        int minEnd = nums[0];
        int maxEnd = nums[0];
        int maxSum = nums[0];
        int minSum = nums[0];
        int total = nums[0];
        for(int i = 1; i < nums.length;i++){
            int val = nums[i];
            
            maxEnd = Math.max(val,maxEnd + val);
            minEnd = Math.min(val, minEnd + val);

            maxSum = Math.max(maxSum,maxEnd);
            minSum = Math.min(minSum,minEnd);
            total += val;
        }

        if(maxSum < 0){
            return maxSum;
        }
        return Math.max(maxSum, total - minSum);
    }
}