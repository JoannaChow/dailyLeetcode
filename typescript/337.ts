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

function rob(root: TreeNode | null): number {
    if (!root) return 0;
    function dfs(node: TreeNode | null): number[] {
        if (!node) return [0, 0];

        const [left, noLeft] = dfs(node.left);
        const [right, noRight] = dfs(node.right);
        return [
            Math.max(node.val + noLeft + noRight, left + right),
            left + right,
        ];
    }
    const [withRoot, withoutRoot] = dfs(root);
    return Math.max(withRoot, withoutRoot);
}
