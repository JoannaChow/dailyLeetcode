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

function trimBST(
    root: TreeNode | null,
    low: number,
    high: number
): TreeNode | null {
    if (!root) return null;
    function trim(node: TreeNode | null, target: number, findLow: boolean) {
        if (!node) return;
        if (findLow) {
            if (node.left?.val < target) {
                node.left = node.left.right;
                trim(node, target, findLow);
            } else if (node.left?.val === target) {
                node.left.left = null;
            } else {
                trim(node.left, target, findLow);
            }
        } else {
            if (node.right?.val > target) {
                node.right = node.right.left;
                trim(node, target, findLow);
            } else if (node.right?.val === target) {
                node.right.right = null;
            } else {
                trim(node.right, target, findLow);
            }
        }
    }
    if (root.val < low) {
        return trimBST(root.right, low, high);
    } else if (root.val > high) {
        return trimBST(root.left, low, high);
    }
    if (root.val === low) {
        root.left = null;
    } else {
        trim(root, low, true);
    }
    if (root.val === high) {
        root.right = null;
    } else {
        trim(root, high, false);
    }
    return root;
}
