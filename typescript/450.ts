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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null;

  if (root.val === key) {
    if (root.left) {
      // find the greatest node in the left tree
      let parentNode = root.left;
        if(!parentNode.right){
            parentNode.right = root.right;
            root = parentNode;
        } else {
            let curNode = parentNode.right;
            while(curNode.right){
                parentNode = curNode;
                curNode = parentNode.right;
            }
            parentNode.right = curNode.left;
            curNode.left = root.left;
            curNode.right = root.right;
            root = curNode;
        }
    } else {
      root = root.right;
    }
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    root.right = deleteNode(root.right, key);
  }
  return root;
}
