 function getCommon(nums1, nums2) {
  let i = 0; // Pointer for nums1
  let j = 0; // Pointer for nums2

  // Traverse while both pointers are within bounds
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      // Since arrays are sorted, the first match is guaranteed to be the minimum
      return nums1[i];
    } else if (nums1[i] < nums2[j]) {
      // nums1 element is smaller, so move pointer i forward
      i++;
    } else {
      // nums2 element is smaller, so move pointer j forward
      j++;
    }
  }

  // If no common element was found
  return -1;
}

// Example usage:
console.log(getCommon([1, 2, 3], [2, 4]));       // Output: 2
console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5])); // Output: 2