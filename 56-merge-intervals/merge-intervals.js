/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    intervals.sort((a, b) => a[0] - b[0]);

    if(intervals.length === 0) return [];
    

    let start1 = intervals[0][0];
    let end1 = intervals[0][1];
    let arr = [];
    for(let i = 1; i < intervals.length; i++){
        let start2 = intervals[i][0];
        let end2 = intervals[i][1];
        
        if(end1 >= start2){
            end1 = Math.max(end1,end2);
        }else{
            arr.push([start1,end1]);

            start1 = start2;
            end1 = end2;
        }
    }
    arr.push([start1,end1])

    return arr;
};