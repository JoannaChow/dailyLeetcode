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

function splitListToParts(
    head: ListNode | null,
    k: number
): Array<ListNode | null> {
    const pointers: ListNode[] = [];
    for (let i = 0; i < k; i++) {
        const newNode = moveSteps(new ListNode(-1, head), i + 1);
        pointers.push(newNode);
    }

    while (true) {
        const movedLastNode = moveSteps(pointers[k - 1], k);
        if (!movedLastNode) {
            let stepsToEnd = 0;
            while (pointers[k - 1] && pointers[k - 1].next) {
                pointers[k - 1] = pointers[k - 1].next;
                stepsToEnd++;
            }
            // console.log(stepsToEnd);
            if (stepsToEnd > 0) {
                if (stepsToEnd < k - 1) {
                    for (let i = 0; i < k - 1; i++) {
                        // split rest of the space
                        const movedNode = moveSteps(
                            pointers[i],
                            i < stepsToEnd ? i + 1 : stepsToEnd
                        );
                        pointers[i] = movedNode;
                    }
                } else {
                    for (let i = k - 2; i >= 0; i--) {
                        // rest of the node shall move one more time
                        const movedNode = moveSteps(pointers[i], i + 1);
                        pointers[i] = movedNode;
                    }
                }
            }

            break;
        }
        pointers[k - 1] = movedLastNode;

        for (let i = k - 2; i >= 0; i--) {
            const movedNode = moveSteps(pointers[i], i + 1);
            pointers[i] = movedNode;
        }
    }

    const result: Array<ListNode | null> = [head];
    for (let i = 0; i < k - 1; i++) {
        result.push(pointers[i] ? pointers[i].next : null);
        if (pointers[i]) {
            pointers[i].next = null;
        }
    }
    return result;

    function moveSteps(node: ListNode, steps: number): ListNode | null {
        let curNode = node;
        let j = 0;
        while (curNode && j < steps) {
            // i'th node move i+1 steps
            curNode = curNode.next;
            j++;
        }
        if (!curNode) {
            return null;
        }
        return curNode;
    }
}
