/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let maxNum=Math.max(...nums);
    let minNum=Math.min(...nums);
    while(minNum!==0){
        let temp=minNum
       minNum=maxNum%minNum;
       maxNum=temp
    }
    return maxNum;
    
};