 var maxAlternatingSum = function(nums) {
    const n = nums.length;
    
 
    for (let i = 0; i < n; i++) {
        nums[i] = nums[i] * nums[i];
    }
    
     
    nums.sort((a, b) => a - b);
    
    let ans = 0;
    const m = Math.floor(n / 2);
    
     
    for (let i = 0; i < m; i++) {
        ans -= nums[i];
    }
    
     
    for (let i = m; i < n; i++) {
        ans += nums[i];
    }
    
    return ans;
};