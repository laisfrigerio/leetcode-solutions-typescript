import { ListNode } from "./entities/list-node";

export const arrayToListNode = (array: number[]): ListNode | null => {
  let listNode: ListNode | null = null;

  for (let index: number = array.length - 1; index >= 0; index--) {
    listNode = new ListNode(array[index], listNode);
  }

  return listNode;
};


export const listNodeToArray = (listNode: ListNode | null): number[] => {
  const array: number[] = [];

  while (listNode) {
    array.push(listNode.val);
    listNode = listNode.next;
  }

  return array;
};

export const addTwoNumbers = (listNodeOne: ListNode | null, listNodeTwo: ListNode | null): ListNode | null => {
  let sum = 0n; // Using BigInt for sum
  let carry = 0n; // Using carry in case of overflow (sum > 9)
  let current = new ListNode(0);
  let result = current;

  while (listNodeOne || listNodeTwo || carry) {
      const val1 = listNodeOne ? BigInt(listNodeOne.val) : 0n;
      const val2 = listNodeTwo ? BigInt(listNodeTwo.val) : 0n;

      sum = val1 + val2 + carry;
      carry = sum / 10n;

      current.next = new ListNode(Number(sum % 10n));
      current = current.next;

      if (listNodeOne) listNodeOne = listNodeOne.next;
      if (listNodeTwo) listNodeTwo = listNodeTwo.next;
  }

  return result.next;
};
