class Solution {
    public int[] sortedSquares(int[] nums) {
        int size = nums.length - 1;
        int result[] = new int[size + 1]; 
        int left = 0;
        int right = size;
        int postion = result.length - 1;
        while(left <= right){
            int sqrLeft = nums[left] * nums[left];
            int sqrRight = nums[right] * nums[right];
            if(sqrLeft >= sqrRight){
                result[postion] = sqrLeft;
                left++;
            }else{
                result[postion] = sqrRight;
                right--;
            }
            postion--;
        }
        return result;
    }
}