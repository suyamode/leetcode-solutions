 /**
 * @param {string} word1
 * @param {string} word2
 * @return {number[]}
 */
var validSequence = function(word1, word2) {
    const n = word1.length, m = word2.length;
    if (m > n) return [];

    // suf[i] = position in word1 matched to word2[i] when greedily matching
    // word2[i:] against word1 from the RIGHT (rightmost occurrences first).
    // This leaves maximum room on the left for earlier characters.
    const suf = new Array(m + 1).fill(-1);
    suf[m] = n; // sentinel: empty suffix needs nothing, "starts" after the end
    let j = n - 1;
    for (let i = m - 1; i >= 0; i--) {
        while (j >= 0 && word1[j] !== word2[i]) j--;
        if (j < 0) break; // can't match this and earlier ones stay -1
        suf[i] = j;
        j--;
    }

    const result = [];
    let changeUsed = false;
    let wi = 0, wj = 0;

    while (wi < n && wj < m) {
        if (word1[wi] === word2[wj]) {
            // exact match: always safe to take greedily
            result.push(wi);
            wi++;
            wj++;
        } else if (!changeUsed && suf[wj + 1] !== -1 && suf[wj + 1] >= wi + 1) {
            // use our one allowed change here, but only if the rest of
            // word2 can still be matched using word1[wi+1:]
            result.push(wi);
            changeUsed = true;
            wi++;
            wj++;
        } else {
            wi++;
        }
    }

    return wj === m ? result : [];
};