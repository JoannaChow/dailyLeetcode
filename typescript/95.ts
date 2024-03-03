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

function generateTrees(n: number): Array<TreeNode | null> {
    const cache: Record<number, Record<number, Array<TreeNode | null>>> = {};
    function constructNodes(from: number, end: number): Array<TreeNode | null> {
        if (end < from) return [null];
        if (from === end) return [new TreeNode(from)];
        if (cache[from] && cache[from][end]) return cache[from][end];
        const result: TreeNode[] = [];
        for (let i = from; i <= end; i++) {
            const leftNdoes: TreeNode[] = constructNodes(from, i - 1);
            const rightNdoes: TreeNode[] = constructNodes(i + 1, end);
            rightNdoes.forEach((rightNode) => {
                result.push(
                    ...leftNdoes.map((leftNode) => {
                        const root: TreeNode = new TreeNode(
                            i,
                            leftNode,
                            rightNode
                        );
                        return root;
                    })
                );
            });
        }
        if (!cache[from]) cache[from] = {};
        cache[from][end] = result;
        return result;
    }
    return constructNodes(1, n);
}
