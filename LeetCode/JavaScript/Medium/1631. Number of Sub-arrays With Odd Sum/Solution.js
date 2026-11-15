/**
 * @param {number[]} arr
 * @return {number}
 */
 function numOfSubarrays(arr) {
    const MOD = 1e9 + 7;
    let oddCount = 0;
    let evenCount = 1; // Base case: prefix sum of 0 is even
    let currentSum = 0;
    let totalOddSubarrays = 0;

    for (let num of arr) {
        currentSum += num;

        if (currentSum % 2 !== 0) {
            // Current prefix sum is odd, pair with all previous even prefix sums
            totalOddSubarrays = (totalOddSubarrays + evenCount) % MOD;
            oddCount++;
        } else {
            // Current prefix sum is even, pair with all previous odd prefix sums
            totalOddSubarrays = (totalOddSubarrays + oddCount) % MOD;
            evenCount++;
        }
    }

    return totalOddSubarrays;
}

// --- Example Test Cases ---
console.log(numOfSubarrays([1, 3, 5]));      // Output: 4
console.log(numOfSubarrays([2, 4, 6]));      // Output: 0
console.log(numOfSubarrays([1, 2, 3, 4, 5, 6, 7])); // Output: 16