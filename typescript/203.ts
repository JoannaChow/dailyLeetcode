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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    const temp = new ListNode();
    temp.next = head;
    let curNode = temp;
    while (curNode) {
        if (!curNode.next) break;
        if (curNode.next.val === val) {
            curNode.next = curNode.next.next;
        } else {
            curNode = curNode.next;
        }
    }
    return temp.next;
}
