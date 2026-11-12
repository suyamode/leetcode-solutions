/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let totalSum = 0;
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase();
        
        // Ensure it's a lowercase English letter (optional safety check)
        if (char >= 'a' && char <= 'z') {
            let stringPosition = i + 1;
            // 'a' (code 97) -> 26, 'z' (code 122) -> 1
            let reversedAlphaPos = 26 - (char.charCodeAt(0) - 97);
            
            totalSum += stringPosition * reversedAlphaPos;
        }
    }
    
    return totalSum;
}
