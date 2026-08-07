 /**
 * @param {string} num
 * @param {number} t
 * @return {string}
 */
var smallestNumber = function(num, t) {
    // 1. Prime Factorization of t
    let count = [0, 0, 0, 0]; // [cnt2, cnt3, cnt5, cnt7]
    let tempT = t;
    
    const primes = [2, 3, 5, 7];
    for (let i = 0; i < 4; i++) {
        while (tempT % primes[i] === 0) {
            count[i]++;
            tempT /= primes[i];
        }
    }
    // If t has prime factors > 7, impossible to form with digits 1-9
    if (tempT > 1) return "-1";

    // Helper: Returns min digits needed to satisfy remaining [c2, c3, c5, c7]
    function getMinLen(c2, c3, c5, c7) {
        let n9 = Math.floor(c3 / 2);
        let remC3 = c3 % 2;
        let n8 = Math.floor(c2 / 3);
        let remC2 = c2 % 3;

        let n6 = 0;
        if (remC2 === 1 && remC3 === 1) {
            n6 = 1;
            remC2 = 0;
            remC3 = 0;
        }

        let n4 = Math.floor(remC2 / 2);
        let rem2 = remC2 % 2;

        return n9 + n8 + n6 + n4 + rem2 + remC3 + c5 + c7;
    }

    // Digit factor contribution map: [cnt2, cnt3, cnt5, cnt7]
    const digitFactors = [
        [0, 0, 0, 0], // 0 (unused)
        [0, 0, 0, 0], // 1
        [1, 0, 0, 0], // 2
        [0, 1, 0, 0], // 3
        [2, 0, 0, 0], // 4
        [0, 0, 1, 0], // 5
        [1, 1, 0, 0], // 6
        [0, 0, 0, 1], // 7
        [3, 0, 0, 0], // 8
        [0, 2, 0, 0]  // 9
    ];

    // Deducts factors contributed by digit d
    function reduce(c, d) {
        let f = digitFactors[d];
        return [
            Math.max(0, c[0] - f[0]),
            Math.max(0, c[1] - f[1]),
            Math.max(0, c[2] - f[2]),
            Math.max(0, c[3] - f[3])
        ];
    }

    // Constructs the lexicographically smallest suffix of exact length `targetLen`
    function buildSuffix(c2, c3, c5, c7, targetLen) {
        let res = [];
        let curr = [c2, c3, c5, c7];

        for (let pos = 0; pos < targetLen; pos++) {
            let remLen = targetLen - 1 - pos;
            for (let d = 1; d <= 9; d++) {
                let nextC = reduce(curr, d);
                if (getMinLen(nextC[0], nextC[1], nextC[2], nextC[3]) <= remLen) {
                    res.push(d);
                    curr = nextC;
                    break;
                }
            }
        }
        return res.join('');
    }

    let n = num.length;
    
    // Find length of valid prefix (up to first '0')
    let firstZero = num.indexOf('0');
    let maxValidPrefix = firstZero === -1 ? n : firstZero;

    // Precompute factor states along the valid prefix of num
    let prefixState = new Array(maxValidPrefix + 1);
    prefixState[0] = [...count];

    for (let i = 0; i < maxValidPrefix; i++) {
        let d = Number(num[i]);
        prefixState[i + 1] = reduce(prefixState[i], d);
    }

    // Case 1: num itself is zero-free and its digit product is divisible by t
    if (maxValidPrefix === n) {
        let finalC = prefixState[n];
        if (finalC[0] === 0 && finalC[1] === 0 && finalC[2] === 0 && finalC[3] === 0) {
            return num;
        }
    }

    // Case 2: Try replacing digit at index i with a larger digit d
    for (let i = maxValidPrefix; i >= 0; i--) {
        if (i === n) continue;

        let startDigit = Number(num[i]) + 1;
        let remLen = n - 1 - i;
        let stateBeforeI = prefixState[i];

        for (let d = startDigit; d <= 9; d++) {
            let nextC = reduce(stateBeforeI, d);
            if (getMinLen(nextC[0], nextC[1], nextC[2], nextC[3]) <= remLen) {
                let prefix = num.slice(0, i) + d;
                let suffix = buildSuffix(nextC[0], nextC[1], nextC[2], nextC[3], remLen);
                return prefix + suffix;
            }
        }
    }

    // Case 3: Need to expand the length of the result (n + 1 or minimum needed)
    let minNeeded = getMinLen(count[0], count[1], count[2], count[3]);
    let targetLen = Math.max(n + 1, minNeeded);
    return buildSuffix(count[0], count[1], count[2], count[3], targetLen);
};