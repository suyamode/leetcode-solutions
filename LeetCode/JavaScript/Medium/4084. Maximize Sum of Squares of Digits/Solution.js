 /**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    // If the required sum exceeds the maximum possible sum for 'num' digits, return ""
    if (sum > 9 * num || sum < 0) return "";
    
    let nines = Math.floor(sum / 9);
    let remainder = sum % 9;
    
    let ans = [];
    
    // Greedily place as many 9s as possible at the most significant positions
    for (let i = 0; i < nines; i++) {
        ans.push('9');
    }
    
    // Place the remainder digit if it's non-zero
    if (remainder > 0) {
        ans.push(String(remainder));
    }
    
    // Pad the remaining positions with zeros to achieve exactly 'num' digits
    while (ans.length < num) {
        ans.push('0');
    }
    
    return ans.join('');
};