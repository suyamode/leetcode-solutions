/**
 * @param {string} s
 * @return {boolean}
 */
    
 function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        // If it's an opening bracket, push its expected closing pair onto the stack
        if (map[char]) {
            stack.push(map[char]);
        } else {
            // If it's a closing bracket, pop from stack and check if it matches
            const top = stack.pop();
            if (top !== char) {
                return false;
            }
        }
    }

    // If stack is empty, all brackets matched correctly
    return stack.length === 0;
}

// Example usage:
console.log(isValid("()"));     // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]"));     // false
console.log(isValid("([)]"));   // false
console.log(isValid("{[]}"));   // true