/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
        //BFS
    if (!root) return null;
    const queue: Node[] = [];
    queue.push(root);
    while (queue.length) {
        const curLen = queue.length;
        for (let i = 0; i < curLen; i++) {
            const cur = queue.shift();
            if (i + 1 < curLen) {
                cur.next = queue[0];
            }
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
    }
    return root;
};