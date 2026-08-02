 var stoneGame = function(piles) {
    const n = piles.length;
    // dp[i][j] stores the maximum score margin (current player - opponent) 
    // for the subarray piles[i...j]
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // Base case: 1 pile left -> player takes it
    for (let i = 0; i < n; i++) {
        dp[i][i] = piles[i];
    }

    // Fill DP table for subarray lengths from 2 to n
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            // Current player can choose left pile (piles[i]) or right pile (piles[j])
            dp[i][j] = Math.max(
                piles[i] - dp[i + 1][j],
                piles[j] - dp[i][j - 1]
            );
        }
    }

    // Alice wins if her relative score advantage is positive
    return dp[0][n - 1] > 0;
};