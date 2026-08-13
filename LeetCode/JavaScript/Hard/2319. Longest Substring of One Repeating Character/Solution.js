 /**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function(s, queryCharacters, queryIndices) {
    const n = s.length;
    const k = queryIndices.length;
    
    // Arrays to store segment tree node properties
    const maxLen = new Int32Array(4 * n);
    const prefixLen = new Int32Array(4 * n);
    const suffixLen = new Int32Array(4 * n);
    const prefixChar = new Array(4 * n);
    const suffixChar = new Array(4 * n);

    // Merge child nodes into parent node `node`
    function merge(node, leftNode, rightNode, leftLen, rightLen) {
        prefixChar[node] = prefixChar[leftNode];
        prefixLen[node] = prefixLen[leftNode];
        if (prefixLen[leftNode] === leftLen && prefixChar[leftNode] === prefixChar[rightNode]) {
            prefixLen[node] += prefixLen[rightNode];
        }

        suffixChar[node] = suffixChar[rightNode];
        suffixLen[node] = suffixLen[rightNode];
        if (suffixLen[rightNode] === rightLen && suffixChar[rightNode] === suffixChar[leftNode]) {
            suffixLen[node] += suffixLen[leftNode];
        }

        let maxVal = Math.max(maxLen[leftNode], maxLen[rightNode]);
        if (suffixChar[leftNode] === prefixChar[rightNode]) {
            maxVal = Math.max(maxVal, suffixLen[leftNode] + prefixLen[rightNode]);
        }
        maxLen[node] = maxVal;
    }

    // Build the Segment Tree
    function build(node, start, end) {
        if (start === end) {
            const char = s[start];
            maxLen[node] = 1;
            prefixLen[node] = 1;
            suffixLen[node] = 1;
            prefixChar[node] = char;
            suffixChar[node] = char;
            return;
        }

        const mid = (start + end) >> 1;
        const leftNode = 2 * node;
        const rightNode = 2 * node + 1;

        build(leftNode, start, mid);
        build(rightNode, mid + 1, end);

        merge(node, leftNode, rightNode, mid - start + 1, end - mid);
    }

    // Update character at `idx` to `char`
    function update(node, start, end, idx, char) {
        if (start === end) {
            prefixChar[node] = char;
            suffixChar[node] = char;
            return;
        }

        const mid = (start + end) >> 1;
        const leftNode = 2 * node;
        const rightNode = 2 * node + 1;

        if (idx <= mid) {
            update(leftNode, start, mid, idx, char);
        } else {
            update(rightNode, mid + 1, end, idx, char);
        }

        merge(node, leftNode, rightNode, mid - start + 1, end - mid);
    }

    build(1, 0, n - 1);

    const result = new Array(k);
    for (let i = 0; i < k; i++) {
        update(1, 0, n - 1, queryIndices[i], queryCharacters[i]);
        result[i] = maxLen[1]; // Root node always holds the maximum length for s[0...n-1]
    }

    return result;
};