/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    
    const sumDigits = nums.map(num => {
    
    return Array.from(String(Math.abs(num)), Number).reduce((acc, curr) => acc + curr, 0);
});

const minimumVal = Math.min(...sumDigits);
return minimumVal;
    
};