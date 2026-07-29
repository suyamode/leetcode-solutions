 /**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestPalindrome = function(s, k) {
  const MAX_K = 1000005; // Cap permutation counts since k <= 10^6
  const freq = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - 97]++;
  }

  const half = new Array(26).fill(0);
  let totalLen = 0;
  let midChar = '';

  for (let i = 0; i < 26; i++) {
    half[i] = Math.floor(freq[i] / 2);
    totalLen += half[i];
    if (freq[i] % 2 !== 0) {
      midChar = String.fromCharCode(97 + i);
    }
  }

  // Fast combination counting capped at MAX_K
  function countWays(halfFreq, remLen) {
    let ways = 1;
    let currLen = remLen;
    for (let i = 0; i < 26; i++) {
      const cnt = halfFreq[i];
      if (cnt === 0) continue;
      
      // Calculate combination C(currLen, cnt)
      for (let j = 1; j <= cnt; j++) {
        ways = Math.floor((ways * (currLen - cnt + j)) / j);
        if (ways >= MAX_K) {
          ways = MAX_K;
          break;
        }
      }
      currLen -= cnt;
      if (ways >= MAX_K) break;
    }
    return ways;
  }

  // If total possible permutations are less than k, impossible
  if (countWays(half, totalLen) < k) return "";

  const leftHalf = [];

  for (let pos = 0; pos < totalLen; pos++) {
    for (let i = 0; i < 26; i++) {
      if (half[i] === 0) continue;

      half[i]--;
      const ways = countWays(half, totalLen - pos - 1);

      if (ways >= k) {
        leftHalf.push(String.fromCharCode(97 + i));
        break; // Keep this character at the current position
      } else {
        k -= ways;
        half[i]++; // Backtrack and try next character
      }
    }
  }

  const leftStr = leftHalf.join("");
  const rightStr = leftHalf.reverse().join("");

  return leftStr + midChar + rightStr;
};