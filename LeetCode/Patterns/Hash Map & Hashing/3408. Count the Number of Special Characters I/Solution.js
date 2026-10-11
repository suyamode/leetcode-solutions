 /**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const charSet = new Set(word);
    let count = 0;

    for (let char of charSet) {
         
        if (char === char.toLowerCase() && charSet.has(char.toUpperCase())) {
            count++;
        }
    }

    return count;
};