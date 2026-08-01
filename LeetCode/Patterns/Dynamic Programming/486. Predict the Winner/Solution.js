  /**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    const memo = new Map();

    function getScore(i, j) {
        if (i === j) return nums[i];

        const key = `${i},${j}`;
        if (memo.has(key)) return memo.get(key);

        const pickStart = nums[i] - getScore(i + 1, j);
        const pickEnd = nums[j] - getScore(i, j - 1);

        const res = Math.max(pickStart, pickEnd);
        memo.set(key, res);
        return res;
    }

    return getScore(0, nums.length - 1) >= 0;
};