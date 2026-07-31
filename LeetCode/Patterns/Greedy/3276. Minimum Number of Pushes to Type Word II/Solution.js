 /**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    // Step 1: Count frequency of each character
    const freq = new Array(26).fill(0);
    for (const char of word) {
        freq[char.charCodeAt(0) - 97]++;
    }

    // Step 2: Sort frequencies in descending order
    freq.sort((a, b) => b - a);

    // Step 3: Greedily calculate total pushes
    let totalPushes = 0;
    for (let i = 0; i < 26; i++) {
        if (freq[i] === 0) break; // No more characters left
        
        // Key position multiplier: 
        // 0-7   -> 1 push
        // 8-15  -> 2 pushes
        // 16-23 -> 3 pushes
        // 24-25 -> 4 pushes
        const pushCost = Math.floor(i / 8) + 1;
        totalPushes += freq[i] * pushCost;
    }

    return totalPushes;
};