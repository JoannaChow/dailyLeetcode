/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function amountOfTime(root: TreeNode | null, start: number): number {
    // convert from binary to undirected graph
    const map: Map<number, Set<number>> = new Map();
    const queue: TreeNode[] = [];
    queue.push(root);
    while (queue.length) {
        const queueLen = queue.length;
        for (let i = 0; i < queueLen; i++) {
            const node = queue.shift() as TreeNode;
            if (!map.has(node.val)) map.set(node.val, new Set());
            const nodeSet = map.get(node.val) as Set<number>;
            if (node.left) {
                queue.push(node.left);
                nodeSet.add(node.left.val);
                map.set(node.left.val, new Set([node.val]));
            }
            if (node.right) {
                queue.push(node.right);
                nodeSet.add(node.right.val);
                map.set(node.right.val, new Set([node.val]));
            }
        }
    }

    const visited: Set<number> = new Set();
    let min = 0;
    const queue2: number[] = [start];
    visited.add(start);
    while (queue2.length) {
        const queueLen = queue2.length;
        for (let i = 0; i < queueLen; i++) {
            const next = queue2.shift() as number;
            map.get(next)?.forEach((num) => {
                if (!visited.has(num)) {
                    queue2.push(num);
                    visited.add(num);
                }
            });
        }
        if (queue2.length) min++;
    }
    return min;
}
