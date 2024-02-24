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

function isPalindrome(head: ListNode | null): boolean {
  if (!head) {
    return true;
  }

  let slow = head,
    fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next?.next;
  }

  let cur = head;
  let stack: number[] = [],
    pushing = true;
  while (cur) {
    if (pushing) {
      stack.push(cur.val);

      if (!fast && cur === slow) {
        // odd number of nodes & meet mid point
        stack.pop();
        pushing = false; // flip
      }
      if (fast && cur === slow) {
        // even number of nodes & finished first half
        pushing = false;
      }
      cur = cur.next;
    } else {
      if (stack[stack.length - 1] !== cur.val) {
        break;
      }
      stack.pop();
      cur = cur.next;
    }
  }
  return stack.length === 0;
}
