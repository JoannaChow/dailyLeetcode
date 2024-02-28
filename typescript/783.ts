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

function minDiffInBST(root: TreeNode | null): number {
  const order: number[] = [];
  let minDiff = Infinity;

  const stack: TreeNode[] = [];
  let curNode = root;
  while (curNode || stack.length) {
    while (curNode) {
      stack.push(curNode);
      curNode = curNode.left;
    }
    curNode = stack.pop();
    order.push(curNode.val);
    if (order.length > 1) {
      minDiff = Math.min(
        minDiff,
        order[order.length - 1] - order[order.length - 2]
      );
    }
    curNode = curNode.right;
  }
  return minDiff;
}
