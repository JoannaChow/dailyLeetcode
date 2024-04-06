/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummyHead = new ListNode(-1, head);
  let curNode = head,
      index = 1;
  let prevNode = dummyHead;
  while (index < left) {
      prevNode = curNode;
      curNode = curNode.next;
      index++;
  }
  const reversedEnd = curNode;
  let nextNode = curNode.next;
  while (index < right) {
      const temp = nextNode.next;
      nextNode.next = curNode;
      curNode = nextNode;
      nextNode = temp;
      index++;
  }
  prevNode.next = curNode;
  reversedEnd.next = nextNode;
  return dummyHead.next;
};