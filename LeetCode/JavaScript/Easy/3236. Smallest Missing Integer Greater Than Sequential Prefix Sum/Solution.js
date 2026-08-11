 /**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    // 1. Calculate the sum of the longest sequential prefix
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            sum += nums[i];
        } else {
            break;
        }
    }
    
    // 2. Collect all elements in a Set for quick lookup
    const numSet = new Set(nums);
    
    // 3. Find the smallest integer x >= sum not present in nums
    let x = sum;
    while (numSet.has(x)) {
        x++;
    }
    
    return x;
};