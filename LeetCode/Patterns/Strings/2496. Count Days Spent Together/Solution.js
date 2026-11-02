/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
 function countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function convertToDayOfYear(dateStr) {
        const [monthStr, dayStr] = dateStr.split('-');
        const month = parseInt(monthStr, 10);
        const day = parseInt(dayStr, 10);

        let totalDays = day;
        for (let i = 0; i < month - 1; i++) {
            totalDays += daysInMonths[i];
        }
        return totalDays;
    }

    const aliceArrival = convertToDayOfYear(arriveAlice);
    const aliceLeave = convertToDayOfYear(leaveAlice);
    const bobArrival = convertToDayOfYear(arriveBob);
    const bobLeave = convertToDayOfYear(leaveBob);

    // Find the overlap range
    const startOverlap = Math.max(aliceArrival, bobArrival);
    const endOverlap = Math.min(aliceLeave, bobLeave);

    // Calculate total days spent together
    if (startOverlap <= endOverlap) {
        return endOverlap - startOverlap + 1;
    }

    // No overlap
    return 0;
}

// --- Example Test Cases ---
console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19")); // Output: 3
console.log(countDaysTogether("10-01", "10-31", "11-01", "12-31")); // Output: 0