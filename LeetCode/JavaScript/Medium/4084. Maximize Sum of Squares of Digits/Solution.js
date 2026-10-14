 /**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
     
    if (sum > 9 * num || sum < 0) return "";
    
    let nines = Math.floor(sum / 9);
    let remainder = sum % 9;
    
    let ans = [];
    
     
    for (let i = 0; i < nines; i++) {
        ans.push('9');
    }
    
     
    if (remainder > 0) {
        ans.push(String(remainder));
    }
    
      
    while (ans.length < num) {
        ans.push('0');
    }
    
    return ans.join('');
};