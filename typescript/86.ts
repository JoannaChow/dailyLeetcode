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

function partition(head: ListNode | null, x: number): ListNode | null {
    let prevNode: ListNode | null = null,
        curNode = head,
        firstPartEnd: ListNode | null = null;
    while (curNode) {
        if (curNode.val < x) {
            if (firstPartEnd) {
                if (prevNode) {
                    prevNode.next = curNode.next;
                }
                curNode.next = firstPartEnd.next;
                firstPartEnd.next = curNode;
                firstPartEnd = curNode;
            } else {
                if (prevNode) {
                    prevNode.next = curNode.next;
                }
                if (curNode !== head) {
                    curNode.next = head;
                    head = curNode;
                }
                firstPartEnd = curNode;
            }
        }
        prevNode = curNode;
        curNode = curNode.next;
    }
    return head;
}
