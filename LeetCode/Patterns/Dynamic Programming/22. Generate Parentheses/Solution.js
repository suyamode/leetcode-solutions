/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result=[];
    function backtrack(currentStr, openCount, closeCount) {
        if (currentStr.length === 2 * n) {
            result.push(currentStr);
            return;
        }

         
        if (openCount < n) {
            backtrack(currentStr + '(', openCount + 1, closeCount);
        }

        
        if (closeCount < openCount) {
            backtrack(currentStr + ')', openCount, closeCount + 1);
        }
    }

    backtrack('', 0, 0);
    return result;
}