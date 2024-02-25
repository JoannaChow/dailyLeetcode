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

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const ans: number[] = [];
  const stack: TreeNode[] = [];
  let curNode = root;

  while (curNode || stack.length) {
    while (curNode) {
      ans.push(curNode.val);
      stack.push(curNode);
      curNode = curNode.left;
    }
    curNode = stack.pop();
    curNode = curNode.right;
  }
  return ans;
}
