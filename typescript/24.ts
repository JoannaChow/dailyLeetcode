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

function swapPairs(head: ListNode | null): ListNode | null {
    if(!head || !head.next){
        return head;
    }
    let curNode = new ListNode(), startNode = new ListNode();
    curNode.next = head, startNode = head.next;
    while(curNode.next && curNode.next.next) {
        const p1 = curNode.next;
        const p2 = curNode.next.next;
        curNode.next = p2;
        p1.next = p2.next;
        p2.next = p1;
        curNode = p1;
    }
    return startNode;
};