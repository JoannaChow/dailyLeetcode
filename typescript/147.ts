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

function insertionSortList(head: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(-1, null);
    let curNode = head;
    while (curNode) {
        const nextNode = curNode.next;
        let insertTo = dummyHead,
            insertNext = dummyHead.next;
        while (insertNext && insertNext.val < curNode.val) {
            insertTo = insertNext;
            insertNext = insertNext.next;
        }
        insertTo.next = curNode;
        curNode.next = insertNext;
        curNode = nextNode;
    }

    return dummyHead.next;
}
