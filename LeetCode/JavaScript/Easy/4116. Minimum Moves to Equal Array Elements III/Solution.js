/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let moves=0;
    let maxVal=Math.max(...nums)
     
    for(let num of nums){
        moves+=maxVal-num
    }
    return moves;
};
console.log([2,1,3])