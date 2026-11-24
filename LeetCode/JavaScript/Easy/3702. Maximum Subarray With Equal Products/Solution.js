/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function(nums) {
    const gcd = (a, b) => {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    const lcm = (a, b) => (a / gcd(a, b)) * b;

    let maxVal = 0;
    let totalLcm = 1;
    for (const x of nums) {
        if (x > maxVal) maxVal = x;
        totalLcm = lcm(totalLcm, x);
    }

    // Any subarray has lcm <= totalLcm and gcd <= maxVal,
    // so lcm(sub) * gcd(sub) can never exceed totalLcm * maxVal.
    const maxBound = totalLcm * maxVal;

    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        let prod = 1;
        let g = 0;
        let l = 1;

        for (let j = i; j < nums.length; j++) {
            prod *= nums[j];
            g = gcd(g, nums[j]);
            l = lcm(l, nums[j]);

            if (prod === g * l) {
                ans = Math.max(ans, j - i + 1);
            }

            if (prod > maxBound) {
                break;
            }
        }
    }

    return ans;
};