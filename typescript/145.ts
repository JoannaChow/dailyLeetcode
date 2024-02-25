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
// iteration
function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const stack: TreeNode[] = [];
  const parentStack: TreeNode[] = [];
  const ans: number[] = [];

  stack.push(root);
  while (stack.length) {
    const curNode = stack.pop();
    if (!curNode) continue;

    if (curNode === parentStack[parentStack.length - 1]) {
      ans.push(curNode.val);
      parentStack.pop();
      continue;
    }

    if (curNode.left || curNode.right) {
      parentStack.push(curNode);

      stack.push(curNode);
      stack.push(curNode.right);
      stack.push(curNode.left);
    } else {
      ans.push(curNode.val);
    }
  }
  return ans;
}
/* // recursion
function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const ans: number[] = [];
  ans.push(
    ...postorderTraversal(root.left),
    ...postorderTraversal(root.right),
    root.val
  );
  return ans;
}
*/
