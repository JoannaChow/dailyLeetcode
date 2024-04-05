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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null;

    let count = 1,
        tailNode = head;
    while (tailNode.next) {
        count++;
        tailNode = tailNode.next;
    }
    k = k % count;
    let curNode = head;
    for (let i = 1; i < count - k; i++) {
        curNode = curNode.next;
    }
    tailNode.next = head;
    const newHead = curNode.next;
    curNode.next = null;
    return newHead;
}
