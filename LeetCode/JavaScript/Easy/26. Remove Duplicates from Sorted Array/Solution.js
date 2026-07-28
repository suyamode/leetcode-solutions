 /**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // Pointer for placing unique elements

    for (let j = 1; j < nums.length; j++) {
        // When a new unique element is found
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    // k is the count of unique elements
    return i + 1;
};