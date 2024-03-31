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

function pairSum(head: ListNode | null): number {
    let fast = head.next,
        slow = head,
        max = 0;

    const stack: number[] = [slow.val];
    while (fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        stack.push(slow.val);
    }
    while (stack.length) {
        slow = slow.next;
        const twinVal = stack.pop();
        max = Math.max(max, slow.val + twinVal);
    }
    return max;
}
