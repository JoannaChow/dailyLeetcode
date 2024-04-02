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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let curNode = head;
    while (curNode) {
        if (curNode.next?.val === curNode.val) {
            const nextNextNode = curNode.next.next;
            curNode.next = nextNextNode;
        } else {
            curNode = curNode.next;
        }
    }
    return head;
}
