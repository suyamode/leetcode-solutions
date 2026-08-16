 /**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
    let cnt0 = 0, cnt1 = 0, cnt2 = 0;

    for (const stone of stones) {
        const rem = stone % 3;
        if (rem === 0) cnt0++;
        else if (rem === 1) cnt1++;
        else cnt2++;
    }

    return check(cnt0, cnt1, cnt2) || check(cnt0, cnt2, cnt1);
};

function check(cnt0, cnt1, cnt2) {
    if (cnt1 === 0) return false;

    cnt1--;

    if (cnt0 % 2 === 0) {
        return cnt1 < cnt2;
    }

    return cnt1 >= cnt2 + 2;
}