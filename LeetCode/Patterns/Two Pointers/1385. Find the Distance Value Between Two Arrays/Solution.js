/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
 function findTheDistanceValue(arr1, arr2, d) {
    return arr1.filter(val1 => 
        arr2.every(val2 => Math.abs(val1 - val2) > d)
    ).length;
}


 