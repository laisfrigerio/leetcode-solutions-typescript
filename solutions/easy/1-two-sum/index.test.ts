import { twoSum } from "./index";
  
describe("twoSum", () => {
  it("should return [1, 0]", () => {
    expect(twoSum([2,7,11,15], 9)).toStrictEqual([1, 0]);
  });

  it("should return [2, 1]", () => {
    expect(twoSum([3,2,4], 6)).toStrictEqual([2, 1]);
  });

  it("should return an array [1, 0]", () => {
    expect(twoSum([3,3], 6)).toStrictEqual([1, 0]);
  });

  it("should return an array [2, 0]", () => {
    expect(twoSum([3,2,3], 6)).toStrictEqual([2, 0]);
  });

  it("should return an array [3, 0]", () => {
    expect(twoSum([0,4,3,0], 0)).toStrictEqual([3, 0]);
  });

  it("should return an array [2, 0]", () => {
    expect(twoSum([-3,4,3,90], 0)).toStrictEqual([2, 0]);
  });

  it("should return an array [2, 1]", () => {
    expect(twoSum([5,75,25], 100)).toStrictEqual([2, 1]);
  });
});
