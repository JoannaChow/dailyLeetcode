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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  function dfs(node: TreeNode | null, curSum: number): boolean {
    if (!node.left && !node.right) {
      if (curSum + node.val === targetSum) {
        return true;
      }
    } else {
      if (node.left && dfs(node.left, curSum + node.val)) return true;
      else if (node.right && dfs(node.right, curSum + node.val)) return true;
    }
    return false;
  }
  return dfs(root, 0);
}
