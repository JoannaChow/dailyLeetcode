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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  let stack: TreeNode[] = [];
  let levels: number[][] = [];
  stack.push(root);
  let left2right = true;
  while (stack.length) {
    const tempStack: TreeNode[] = [];
    const curLevel: number[] = [];
    while (stack.length) {
      let cur = stack.pop();
      curLevel.push(cur.val);
      if (left2right) {
        if (cur.left) tempStack.push(cur.left);
        if (cur.right) tempStack.push(cur.right);
      } else {
        if (cur.right) tempStack.push(cur.right);
        if (cur.left) tempStack.push(cur.left);
      }
    }
    levels.push(curLevel);
    stack = tempStack;
    left2right = !left2right;
  }
  return levels;
}
