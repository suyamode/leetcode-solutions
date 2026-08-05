 /**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function(n, k, invocations) {
    // Step 1: Build graph (adjacency list)
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of invocations) {
        graph[u].push(v);
    }

    // Step 2: BFS to mark all suspicious methods reachable from k
    const suspicious = new Array(n).fill(false);
    suspicious[k] = true;
    const queue = [k];

    let head = 0;
    while (head < queue.length) {
        const curr = queue[head++];
        for (const neighbor of graph[curr]) {
            if (!suspicious[neighbor]) {
                suspicious[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    // Step 3: Verify if any non-suspicious method invokes a suspicious one
    for (const [u, v] of invocations) {
        if (!suspicious[u] && suspicious[v]) {
            // Invocation comes from outside the group -> cannot remove
            return Array.from({ length: n }, (_, i) => i);
        }
    }

    // Step 4: Return remaining non-suspicious methods
    const remaining = [];
    for (let i = 0; i < n; i++) {
        if (!suspicious[i]) {
            remaining.push(i);
        }
    }

    return remaining;
};