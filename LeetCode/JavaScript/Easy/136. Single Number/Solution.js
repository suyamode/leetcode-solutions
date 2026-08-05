/**
 * @param {number[]} nums
 * @return {number}
 */
 const singleNumber = nums => nums.reduce((acc, curr) => acc ^ curr, 0);