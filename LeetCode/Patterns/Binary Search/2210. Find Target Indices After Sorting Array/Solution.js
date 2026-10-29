/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
     let lessCount = 0;
    let targetCount = 0;

    // Single pass to count smaller and matching elements
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target) {
            lessCount++;
        } else if (nums[i] === target) {
            targetCount++;
        }
    }

    // Directly generate the index array
    const result = [];
    for (let i = 0; i < targetCount; i++) {
        result.push(lessCount + i);
    }

    return result;
};