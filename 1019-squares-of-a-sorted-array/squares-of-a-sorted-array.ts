function sortedSquares(nums: number[]): number[] {
    let size:number = nums.length - 1;
    let result:number[] = new Array(size + 1).fill(0);
    let left:number = 0;
    let right:number = size;
    let position:number = result.length - 1;

    while(left <= right){
        let squaredLeft:number = nums[left] ** 2;
        let squaredRight:number = nums[right] ** 2;

        if(squaredLeft <= squaredRight){
            result[position] = squaredRight;
            right--;
        }else{
            result[position] = squaredLeft;
            left++;
        }
        position--;
    }
    return result;


};