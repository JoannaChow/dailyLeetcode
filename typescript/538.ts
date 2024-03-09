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

function convertBST(root: TreeNode | null): TreeNode | null {
    const stack: TreeNode[] = [];
    let cur = root;
    const tempStack: TreeNode[] = [];
    while (tempStack.length || cur) {
        while (cur) {
            tempStack.push(cur);
            cur = cur.left;
        }
        cur = tempStack.pop();
        stack.push(cur);
        if (cur.right) {
            cur = cur.right;
        } else {
            cur = null;
        }
    }
    let curSum = 0;
    while (stack.length) {
        cur = stack.pop();
        const temp = curSum + cur.val;
        cur.val += curSum;
        curSum = temp;
    }
    return root;
}
