/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const n = word.length;
    let pushes = 0;
    
    for (let i = 0; i < n; i++) {
        // Math.floor(i / 8) + 1 calculates key press count:
        // Indices 0-7  -> 1 push
        // Indices 8-15 -> 2 pushes
        // Indices 16-23 -> 3 pushes
        // Indices 24-25 -> 4 pushes
        pushes += Math.floor(i / 8) + 1;
    }
    
    return pushes;
};