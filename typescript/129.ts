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

function sumNumbers(root: TreeNode | null): number {
    if (!root) return 0;

    let sum = 0;
    function dfs(node: TreeNode | null, numBase: number) {
        if (!node.left && !node.right) {
            sum += numBase;
            return;
        }
        if (node.left) dfs(node.left, 10 * numBase + node.left.val);
        if (node.right) dfs(node.right, 10 * numBase + node.right.val);
    }
    dfs(root, root.val);
    return sum;
}
