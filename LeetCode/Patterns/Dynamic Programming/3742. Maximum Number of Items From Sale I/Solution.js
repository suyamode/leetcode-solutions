 /**
 * @param {number[][]} items - Array of [factor, price]
 * @param {number} budget
 * @return {number}
 */
function maximumSaleItems(items, budget) {
  const n = items.length;
  if (n === 0 || budget <= 0) return 0;

  let minPrice = Infinity;
  for (const [, price] of items) {
    if (price < minPrice) minPrice = price;
  }

  // freeBonus[i] = count of other items j where factor_i divides factor_j
  const freeBonus = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const factorI = items[i][0];
    let bonus = 0;
    for (let j = 0; j < n; j++) {
      if (i !== j && items[j][0] % factorI === 0) {
        bonus++;
      }
    }
    freeBonus[i] = bonus;
  }

  // dp[c] = max baseCopies with total subset cost === c
  const dp = new Array(budget + 1).fill(-1);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    const price = items[i][1];
    if (price > budget) continue;

    const gain = 1 + freeBonus[i];
    for (let c = budget; c >= price; c--) {
      if (dp[c - price] !== -1) {
        const candidate = dp[c - price] + gain;
        if (candidate > dp[c]) {
          dp[c] = candidate;
        }
      }
    }
  }

  let best = Math.floor(budget / minPrice);
  for (let c = 0; c <= budget; c++) {
    if (dp[c] !== -1) {
      const total = dp[c] + Math.floor((budget - c) / minPrice);
      if (total > best) best = total;
    }
  }

  return best;
}