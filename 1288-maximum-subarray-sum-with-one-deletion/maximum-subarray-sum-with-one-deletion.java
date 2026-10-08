class Solution {
    public int maximumSum(int[] arr) {
        int noDelete = arr[0];
        int oneDelete = Integer.MIN_VALUE / 2;
        int result = arr[0];
        for(int i = 1; i < arr.length;i++){
            int prevNoDelete = noDelete;
            int prevOneDelete = oneDelete;

            oneDelete = Math.max(prevOneDelete + arr[i], prevNoDelete);
            noDelete = Math.max(prevNoDelete + arr[i],arr[i]);
            result = Math.max(result, Math.max(oneDelete,noDelete));
        }
        return result;
        
    }
}