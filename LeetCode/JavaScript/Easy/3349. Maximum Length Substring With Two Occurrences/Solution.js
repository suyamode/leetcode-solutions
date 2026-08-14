 /**
 * @param {string} s
 * @return {number}
 */
function maximumLengthSubstring(s) {
    const counts = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        counts[char] = (counts[char] || 0) + 1;

        // Shrink the window from the left until the current character's frequency is <= 2
        while (counts[char] > 2) {
            counts[s[left]]--;
            left++;
        }

        // Calculate the window size
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
console.log(maximumLengthSubstring("bcbbbcba")); // Output: 4 ("bcba" or "cbbc")
console.log(maximumLengthSubstring("aaaa"));     // Output: 2 ("aa")