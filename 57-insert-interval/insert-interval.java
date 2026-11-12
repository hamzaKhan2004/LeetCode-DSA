class Solution {
    
    public int[][] insert(int[][] intervals, int[] newInterval) {
        int start = newInterval[0];
        boolean insert = false;
        ArrayList<int[]> result = new ArrayList<>();
        for(int i = 0; i < intervals.length; i++){
            if(!insert && start <= intervals[i][0]){
                result.add(newInterval);
                insert = true;
            }
            result.add(intervals[i]);
        }
        if(!insert){
            result.add(newInterval);
        }

        int s1 = result.get(0)[0];
        int e1 = result.get(0)[1];
        ArrayList<int[]> mergeResult = new ArrayList<>();
        for(int i = 0; i < result.size();i++){
            int s2 = result.get(i)[0];
            int e2 = result.get(i)[1];
            if(e1 >= s2){
                e1 = Math.max(e1,e2);
            }else{
                mergeResult.add(new int[]{s1,e1});
                s1 = s2;
                e1 = e2;
            }
        }
        mergeResult.add(new int[]{s1,e1});
        return mergeResult.toArray(new int[0][]);
    }

}