/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
 const sorted=[...nums].sort((a,b)=>a-b);
 const len=sorted.length;
 return ((sorted[len-1]-1)*(sorted[len-2]-1))

    
};