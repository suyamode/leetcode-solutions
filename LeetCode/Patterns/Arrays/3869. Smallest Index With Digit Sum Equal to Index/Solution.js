 /**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        // Calculate digit sum mathematically without string conversions
        let sum = 0;
        let temp = nums[i];
        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }

        // Return immediately on the first match (guaranteed to be smallest index)
        if (sum === i) {
            return i;
        }
    }

    // Return -1 if no index satisfies the condition
    return -1;
};