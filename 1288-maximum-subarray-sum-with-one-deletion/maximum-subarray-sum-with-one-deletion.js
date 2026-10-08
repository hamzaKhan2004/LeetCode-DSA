/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    let oneDelete = -Infinity;
    let noDelete = arr[0];
    let result = arr[0];
    for(let i = 1; i < arr.length; i++){
        let prevNoDelete = noDelete;
        let prevOneDelete = oneDelete;

        oneDelete = Math.max(prevOneDelete + arr[i],prevNoDelete);
        noDelete = Math.max(arr[i], prevNoDelete + arr[i]);

        result = Math.max(result,Math.max(oneDelete,noDelete));
    }
    return result;
    
};