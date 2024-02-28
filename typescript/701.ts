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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  const newNode = new TreeNode(val);
  if (!root) return newNode;

  let curNode = root;
  while (true) {
    if (val < curNode.val) {
      if (curNode.left) {
        curNode = curNode.left;
      } else {
        curNode.left = newNode;
        break;
      }
    } else {
      if (curNode.right) {
        curNode = curNode.right;
      } else {
        curNode.right = newNode;
        break;
      }
    }
  }
  return root;
}
