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

function widthOfBinaryTree(root: TreeNode | null): number {
  if (root === null) return 0;
  let ans = 0;

  let queue = new Array<[TreeNode, number]>(); // value, index
  queue.push([root, 0]);
  while (queue.length !== 0) {
    const size = queue.length;
    // left-most index.
    const indexBase = queue[0][1];
    // left most element
    const [left, i]: [TreeNode, number] = queue[0];
    // right most element
    const [right, j]: [TreeNode, number] = queue[size - 1];
    // update ans
    ans = Math.max(ans, j - i + 1);
    // update the queue
    for (let k = 0; k < size; k++) {
      const [r, i]: [TreeNode, number] = queue.shift();
      if (r.left !== null) {
        queue.push([r.left, 2 * (i - indexBase)]);
      }
      if (r.right !== null) {
        queue.push([r.right, 2 * (i - indexBase) + 1]);
      }
    }
  }
  return ans;
}
