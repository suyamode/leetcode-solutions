/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let minVal=Math.min(...nums);
    let moves=0;
    for(let num of nums){
        moves+=(num-minVal)
    }
    return moves;
};
console.log(minMoves([1,]));