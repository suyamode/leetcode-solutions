 /**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const frequencyMap = new Map();
    const target = 'balloon';
    
    
    for (let char of text) {
        if (target.includes(char)) {
            frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
        }
    }
    
    // 2. Check if all required letters ('b', 'a', 'l', 'o', 'n') are present
    const requiredChars = ['b', 'a', 'l', 'o', 'n'];
    for (let char of requiredChars) {
        if (!frequencyMap.has(char)) {
            return 0;  
        }
    }
    let b = frequencyMap.get('b');
    let a = frequencyMap.get('a');
    let l = Math.floor(frequencyMap.get('l') / 2); // 'l' appears twice
    let o = Math.floor(frequencyMap.get('o') / 2); // 'o' appears twice
    let n = frequencyMap.get('n');
    
     
    return Math.min(b, a, l, o, n);
};