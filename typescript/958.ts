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

function isCompleteTree(root: TreeNode | null): boolean {
    if (!root) return true;

    let stack: Array<TreeNode | null> = [];
    stack.push(root);
    let reachLastLevel = false;
    while (stack.length) {
        const tempStack: Array<TreeNode | null> = [];
        while (stack.length) {
            let node = stack.shift();
            if (reachLastLevel && node) return false;
            if (stack.length && !node && stack[0]) return false;
            if (!node) {
                reachLastLevel = true;
            } else {
                tempStack.push(node.left, node.right);
            }
        }
        stack = tempStack;
    }
    return true;
}
