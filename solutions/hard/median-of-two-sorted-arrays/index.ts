export const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const mergedNums = [...nums1, ...nums2].sort((a,b) => a - b);
  const size = mergedNums.length;

  if (size % 2 === 0) {
    const mediumPosition = Math.floor(size/2);
    const previousPosition = mediumPosition - 1;
    const sum = mergedNums[previousPosition] + mergedNums[mediumPosition];
    return sum / 2;
  }

  return mergedNums[Math.floor(size/2)];
};
 