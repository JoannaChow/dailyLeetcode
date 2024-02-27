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

function tree2str(root: TreeNode | null): string {
  if (!root) return "";

  function dfs(node: TreeNode): string {
    if (!node) return "";

    if (node && !node.left && !node.right) {
      return `${node.val}`;
    }
    
    let l = node.left ? `(${dfs(node.left)})` : `()`;
    let r = node.right ? `(${dfs(node.right)})` : ``;
    return `${node.val}${l}${r}`;
  }

  return dfs(root);
}
