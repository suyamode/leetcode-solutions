 var sumOfSquares = function(nums) {
    const n = nums.length;
    return nums.reduce((sum, num, index) => {
        return n % (index + 1) === 0 ? sum + num ** 2 : sum;
    }, 0);
};