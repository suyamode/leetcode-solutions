 /**
 * @param {number[]} arr
 * @return {number}
 */
var longestSubsequence = function(arr) {
  const n = arr.length;
  let totalXor = 0;
  let hasNonZero = false;

  for (let i = 0; i < n; i++) {
    totalXor ^= arr[i];
    if (arr[i] !== 0) {
      hasNonZero = true;
    }
  }

  
  if (!hasNonZero) {
    return 0;
  }


  if (totalXor !== 0) {
    return n;
  }

  return n - 1;
};