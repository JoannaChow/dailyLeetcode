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

class BSTIterator {
    queue: number[];
    pointer: number;
    constructor(root: TreeNode | null) {
        this.pointer = -1;
        this.queue = [];
        const stack: TreeNode[] = [];
        let cur = root;
        while (stack.length || cur) {
            while (cur) {
                stack.push(cur);
                cur = cur.left;
            }
            cur = stack.pop();
            this.queue.push(cur.val);
            if (cur.right) {
                cur = cur.right;
            } else {
                cur = null;
            }
        }
    }

    next(): number {
        return this.queue[++this.pointer];
    }

    hasNext(): boolean {
        return this.pointer + 1 < this.queue.length;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
