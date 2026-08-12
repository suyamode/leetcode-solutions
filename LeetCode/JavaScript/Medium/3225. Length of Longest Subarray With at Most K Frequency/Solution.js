 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    const freq = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        const num = nums[right];
        
        // Add current element to frequency map
        freq.set(num, (freq.get(num) || 0) + 1);

        // Shrink window from the left if the frequency of current element exceeds k
        while (freq.get(num) > k) {
            const leftNum = nums[left];
            freq.set(leftNum, freq.get(leftNum) - 1);
            left++;
        }

        // Calculate the maximum valid window size
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};