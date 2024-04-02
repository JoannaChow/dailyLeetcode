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
// using nodes: 0(n) in time
function swapNodes(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    let p1 = head,
        p2 = head,
        p3 = head;
    for (let i = 1; i < k; i++) {
        p1 = p1.next;
    }
    p2 = p1;
    while (p2.next) {
        p2 = p2.next;
        p3 = p3.next;
    }

    const tempVal = p1.val;
    p1.val = p3.val;
    p3.val = tempVal;
    return head;
}
/*
// calculating steps: o(n) in time
function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let fast = head,
        slow = head,
        countHalf = 1;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        countHalf++;
    }
    let firstNode = head,
        secondNode = slow,
        firstHalfSteps = 0,
        secondHalfSteps = 0;
    if (fast) {
        // odd number
        const half = countHalf;
        if (k === half) {
            return head;
        } else if (k > half) {
            firstHalfSteps = 2 * half - k - 1;
            secondHalfSteps = k - half;
        } else {
            firstHalfSteps = k - 1;
            secondHalfSteps = half - k;
        }
    } else {
        // even number
        const half = countHalf - 1;
        if (k <= half) {
            firstHalfSteps = k - 1;
            secondHalfSteps = half - k;
        } else {
            firstHalfSteps = 2 * half - k;
            secondHalfSteps = k - half - 1;
        }
    }
    while (firstHalfSteps > 0) {
        firstNode = firstNode.next;
        firstHalfSteps--;
    }
    while (secondHalfSteps > 0) {
        secondNode = secondNode.next;
        secondHalfSteps--;
    }
    const tempVal = firstNode.val;
    firstNode.val = secondNode.val;
    secondNode.val = tempVal;
    return head;
}
*/
