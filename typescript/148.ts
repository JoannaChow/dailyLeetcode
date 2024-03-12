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

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let left = head;
    let right = getMid(head);
    const temp = right.next;
    right.next = null;
    right = temp;
    left = sortList(left);
    right = sortList(right);
    return merge(left, right);

    function getMid(head: ListNode): ListNode {
        let slow = head,
            fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    function merge(
        list1: ListNode | null,
        list2: ListNode | null
    ): ListNode | null {
        let tail = new ListNode(),
            dummy = tail;
        while (list1 && list2) {
            if (list1.val < list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }
        if (list1) {
            tail.next = list1;
        }
        if (list2) {
            tail.next = list2;
        }
        return dummy.next;
    }
}
