/**
 * @param {number[]} nums
 * @return {number}
 */
function minMoves2(nums) {
    // 1. Sort the array to easily find the median
    nums.sort((a, b) => a - b);
    
    // 2. Find the median element
    const median = nums[Math.floor(nums.length / 2)];
    
    // 3. Calculate the total moves (sum of absolute differences)
    let moves = 0;
    for (let num of nums) {
        moves += Math.abs(num - median);
    }
    
    return moves;
}

// Example 1:
console.log(minMoves2([1, 2, 3])); // Output: 2

// Example 2:
console.log(minMoves2([1, 10, 2, 9])); // Output: 16