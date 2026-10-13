 var maxAlternatingSum = function(nums) {
    const n = nums.length;
    
    // 1. Square all elements
    for (let i = 0; i < n; i++) {
        nums[i] = nums[i] * nums[i];
    }
    
    // 2. Sort in ascending order using O(n log n) built-in sort
    nums.sort((a, b) => a - b);
    
    let ans = 0;
    const m = Math.floor(n / 2);
    
    // 3. Subtract the smaller half of the squares
    for (let i = 0; i < m; i++) {
        ans -= nums[i];
    }
    
    // 4. Add the larger half of the squares
    for (let i = m; i < n; i++) {
        ans += nums[i];
    }
    
    return ans;
};