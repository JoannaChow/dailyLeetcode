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

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
    const hash: Map<string, number> = new Map();
    const result: TreeNode[] = [];
    function dfs(node: TreeNode): string {
        if (!node) return "";

        const leftStr = dfs(node.left);
        const rightStr = dfs(node.right);
        let curStr = `${node.val}#${leftStr}#${rightStr}`;
        if (hash.has(curStr)) {
            const count = hash.get(curStr) ?? 0;
            if (count === 1) result.push(node);
            hash.set(curStr, count + 1);
        } else {
            hash.set(curStr, 1);
        }
        return curStr;
    }
    dfs(root);
    return result;
}
