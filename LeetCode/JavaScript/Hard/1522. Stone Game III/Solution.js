 function stoneGameIII(stoneValue) {
    const n = stoneValue.length;
    // dp[i] stores the max score difference (current player - opponent) from index i onward
    const dp = new Array(n + 1).fill(0);

    // Iterate backward from the end of the array
    for (let i = n - 1; i >= 0; i--) {
        let totalTaken = 0;
        let bestDiff = -Infinity;

        // Try taking 1, 2, or 3 stones
        for (let k = 1; k <= 3; k++) {
            if (i + k - 1 < n) {
                totalTaken += stoneValue[i + k - 1];
                bestDiff = Math.max(bestDiff, totalTaken - dp[i + k]);
            }
        }

        dp[i] = bestDiff;
    }

    // Evaluate Alice's final relative advantage starting at index 0
    if (dp[0] > 0) return "Alice";
    if (dp[0] < 0) return "Bob";
    return "Tie";
}