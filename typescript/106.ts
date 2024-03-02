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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!inorder.length) return null;

  const length = inorder.length;
  const rootVal = postorder[length - 1];
  const leftNodeLength = inorder.indexOf(rootVal);
  const leftNode = buildTree(
    inorder.slice(0, leftNodeLength),
    postorder.slice(0, leftNodeLength)
  );
  const rightNode = buildTree(
    inorder.slice(leftNodeLength + 1),
    postorder.slice(leftNodeLength, length - 1)
  );
  const root = new TreeNode(rootVal, leftNode, rightNode);
  return root;
}
