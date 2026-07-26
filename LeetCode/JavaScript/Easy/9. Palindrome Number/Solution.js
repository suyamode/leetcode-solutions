 /**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // Negative numbers are never palindromes (e.g., -121 -> "121-")
  if (x < 0) return false;

  const digitArray = Array.from(String(x), Number);
  let left = 0;
  let right = digitArray.length - 1;

  while (left < right) {
    if (digitArray[left] !== digitArray[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};