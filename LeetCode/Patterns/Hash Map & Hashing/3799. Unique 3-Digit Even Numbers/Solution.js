 /**
 * @param {number[]} digits
 * @return {number}
 */
function totalNumbers(digits) {
    // Step 1: Count frequency of available digits
    const count = new Array(10).fill(0);
    for (const d of digits) {
        count[d]++;
    }

    let validCount = 0;

    // Step 2: Iterate through all valid 3-digit even numbers
    for (let num = 100; num <= 998; num += 2) {
        const d1 = Math.floor(num / 100);
        const d2 = Math.floor((num % 100) / 10);
        const d3 = num % 10;

        // Count required frequency of each digit for `num`
        const need = new Array(10).fill(0);
        need[d1]++;
        need[d2]++;
        need[d3]++;

        // Step 3: Check if we have enough of each digit available
        let possible = true;
        for (let d = 0; d < 10; d++) {
            if (need[d] > count[d]) {
                possible = false;
                break;
            }
        }

        if (possible) {
            validCount++;
        }
    }

    return validCount;
};