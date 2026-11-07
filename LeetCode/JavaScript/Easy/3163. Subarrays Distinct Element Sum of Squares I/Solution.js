/**
 * @param {number[]} nums
 * @return {number}
 */
 function sumCounts(nums) {
    let totalSum = 0;
    const n = nums.length;

    
    for (let i = 0; i < n; i++) {
        const seen = new Set();
        for (let j = i; j < n; j++) {
            seen.add(nums[j]); 
            let distinctCount = seen.size;  
            totalSum += distinctCount * distinctCount;  
        }
    }

    return totalSum;
}