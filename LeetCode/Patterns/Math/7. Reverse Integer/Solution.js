 /**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 1. Store the sign and work with absolute value
    const sign = x < 0 ? -1 : 1;
    
    // 2. Convert to string, split into array, reverse, and join back
    const reversedNum = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
    
    // 3. Check for 32-bit signed integer overflow bounds
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    
    if (reversedNum < INT_MIN || reversedNum > INT_MAX) {
        return 0;
    }
    
    return reversedNum;
};