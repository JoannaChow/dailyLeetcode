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

function findBottomLeftValue(root: TreeNode | null): number {
    const queue: TreeNode[] = [];
    queue.push(root);
    let leftMost = 0;
    while (queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            if (i === 0) {
                leftMost = node.val;
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return leftMost;
}
