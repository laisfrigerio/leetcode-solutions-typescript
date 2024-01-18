import { findMedianSortedArrays } from "./index";

describe("findMedianSortedArrays", () => {
  it("should return -1", () => {
    expect(findMedianSortedArrays([3], [-2, -1])).toBe(-1);
  });

  it("should return 2", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  it("should return 2.5", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });
});
