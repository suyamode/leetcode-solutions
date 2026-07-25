 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // If we've already seen the number needed to reach target, return both indices
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    // Otherwise, store the current number and its index
    map.set(nums[i], i);
  }
};

// Test example:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]