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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    while (lists.length > 1) {
        const mergedLists: ListNode[] = [];
        for (let i = 0; i < lists.length; i += 2) {
            if (i + 1 === lists.length) {
                mergedLists.push(lists[i]);
                continue;
            }
            mergedLists.push(mergeList(lists[i], lists[i + 1]));
        }
        lists = mergedLists;
    }
    return lists.length > 0 ? lists[0] : null;
    function mergeList(list1: ListNode, list2: ListNode): ListNode {
        const head: ListNode = new ListNode();
        let cur = head;
        while (list1 && list2) {
            if (list1.val <= list2.val) {
                cur.next = list1;
                list1 = list1.next;
            } else {
                cur.next = list2;
                list2 = list2.next;
            }
            cur = cur.next;
        }
        if (list1) {
            cur.next = list1;
        }
        if (list2) {
            cur.next = list2;
        }
        return head.next;
    }
}
