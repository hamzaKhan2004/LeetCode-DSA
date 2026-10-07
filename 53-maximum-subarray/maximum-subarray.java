class Solution {
    public int maxSubArray(int[] nums) {
        int bestEnding = nums[0];
        int result = nums[0];
        for(int i = 1; i < nums.length;i++){
            bestEnding = Math.max(nums[i],bestEnding + nums[i]);
            result = Math.max(result,bestEnding);
        }
        return result;
    }
}