 var sumOfSquares = function(nums) {
    let sum = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        // Check if the 1-based position divides n evenly
        if (n % (i + 1) === 0) {
            sum += nums[i] ** 2;
        }
    }

    return sum;
};