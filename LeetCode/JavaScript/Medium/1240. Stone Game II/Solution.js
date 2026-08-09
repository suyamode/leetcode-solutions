 /**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;
    
    // Calculate suffix sums
    const suffixSum = new Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + piles[i];
    }
    
    // Memoization table: memo[i][m]
    const memo = Array.from({ length: n }, () => new Array(n + 1).fill(0));
    
    function solve(i, m) {
        // Base case: If we can take all remaining piles, do it
        if (i + 2 * m >= n) {
            return suffixSum[i];
        }
        
        if (memo[i][m] !== 0) {
            return memo[i][m];
        }
        
        let maxStones = 0;
        
        // Try taking X piles, where 1 <= X <= 2 * M
        for (let x = 1; x <= 2 * m; x++) {
            const nextM = Math.max(m, x);
            // Current player's score = total remaining stones - opponent's best score from (i + x, nextM)
            const score = suffixSum[i] - solve(i + x, nextM);
            maxStones = Math.max(maxStones, score);
        }
        
        memo[i][m] = maxStones;
        return maxStones;
    }
    
    return solve(0, 1);
};