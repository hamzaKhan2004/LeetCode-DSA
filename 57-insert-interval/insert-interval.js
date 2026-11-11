/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let start = newInterval[0];

    let result = [];
    let insert = false;
    for(let i = 0; i < intervals.length; i++){
        if(!insert && start <= intervals[i][0]){
            result.push(newInterval);
            insert = true;
        }
        result.push(intervals[i]);
    }

    if (!insert) {
        result.push(newInterval);
    }

    let mergeInterval = (result) =>{
        let s1 = result[0][0];
        let e1 = result[0][1];
        let mergeResult = [];

        for(let i = 0; i < result.length; i++){
            let s2 = result[i][0];
            let e2 = result[i][1];
            
            if(e1 >= s2){
                e1 = Math.max(e1,e2);
            }else{
                mergeResult.push([s1,e1]);
                s1 = s2;
                e1 = e2;
            }

        }
        mergeResult.push([s1,e1]);
        return mergeResult;
    }

    return mergeInterval(result);
};