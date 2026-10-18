 /**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let minSum = Infinity;

    for (let num of nums) {
        let sum = 0;
        let n = Math.abs(num); // Safely handle negative numbers

        if (n === 0) {
            sum = 0;
        } else {
            // Extract and sum digits mathematically (faster than strings)
            while (n > 0) {
                sum += n % 10;
                n = Math.floor(n / 10);
            }
        }

        // Track the minimum sum on the fly
        if (sum < minSum) {
            minSum = sum;
        }
    }

    return minSum;
};