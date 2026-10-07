class Solution {
    public int maxProduct(int[] nums) {
        int maxPro = nums[0];
        int minPro = nums[0];
        int ans = nums[0];
        for(int i = 1; i < nums.length; i++){
            int product = nums[i];
            int prevMax = maxPro * product;
            int prevMin = minPro * product;

            maxPro = Math.max(product,Math.max(prevMax,prevMin));
            minPro = Math.min(product,Math.min(prevMax,prevMin));
            ans = Math.max(ans, Math.max(maxPro,minPro));
        }
        return ans;
        
    }
}