import { 
  addTwoNumbers,
  arrayToListNode,
  listNodeToArray 
} from "./index";

describe("addTwoNumbers", () => {
  it("should return null when both lists are null", () => {
    expect(addTwoNumbers(null, null)).toBe(null);
  });

  it("should return [0]", () => {
    const listNodeOne = arrayToListNode([0]);
    const listNodeTwo = arrayToListNode([0]);

    const returnListNode = addTwoNumbers(listNodeOne, listNodeTwo);
    expect(listNodeToArray(returnListNode)).toStrictEqual([0]);
  });

  it("should return an array [7,0,8]", () => {
    const listNodeOne = arrayToListNode([2, 4, 3]);
    const listNodeTwo = arrayToListNode([5, 6, 4]);

    const returnListNode = addTwoNumbers(listNodeOne, listNodeTwo);
    expect(listNodeToArray(returnListNode)).toStrictEqual([7, 0, 8]);
  });

  it("should return an array [8,9,9,9,0,0,0,1]", () => {
    const listNodeOne = arrayToListNode([9, 9, 9, 9, 9, 9, 9]);
    const listNodeTwo = arrayToListNode([9, 9, 9, 9]);

    const returnListNode = addTwoNumbers(listNodeOne, listNodeTwo);
    expect(listNodeToArray(returnListNode)).toStrictEqual([8,9,9,9,0,0,0,1]);
  });

  it("should return an array [8, 0, 8]", () => {
    const listNodeOne = arrayToListNode([3, 1, 5]);
    const listNodeTwo = arrayToListNode([5, 9, 2]);

    const returnListNode = addTwoNumbers(listNodeOne, listNodeTwo);
    expect(listNodeToArray(returnListNode)).toStrictEqual([8, 0, 8]);
  });

  it("should return an array [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]", () => {
    const listNodeOne = arrayToListNode([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    const listNodeTwo = arrayToListNode([5, 6, 4]);

    const returnListNode = addTwoNumbers(listNodeOne, listNodeTwo);
    expect(listNodeToArray(returnListNode)).toStrictEqual([6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
  });
});
