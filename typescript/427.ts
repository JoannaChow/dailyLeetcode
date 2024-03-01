/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */

function construct(grid: number[][]): Node | null {
    function helper(startX: number, startY: number, endX: number, endY: number): Node {
        const root: Node = new Node();
        if (startX === endX) {
            root.val = grid[startX][startY] === 1;
            root.isLeaf = true;
        } else {
            const midLen = Math.floor((endX - startX) / 2);
            root.topLeft = helper(startX, startY, startX + midLen, startY + midLen);
            root.topRight = helper(startX, startY + midLen + 1, startX + midLen, endY);
            root.bottomLeft = helper(startX + midLen + 1, startY, endX, startY + midLen);
            root.bottomRight = helper(startX + midLen + 1, startY + midLen + 1, endX, endY);
            if (root.topLeft.isLeaf && root.topRight.isLeaf && root.bottomLeft.isLeaf && root.bottomRight.isLeaf &&
                (root.topLeft.val === root.topRight.val) &&
                (root.topLeft.val === root.bottomLeft.val) &&
                (root.topLeft.val === root.bottomRight.val)) {
                root.isLeaf = true;
                root.val = root.topLeft.val;
                root.topLeft = null;
                root.topRight = null;
                root.bottomLeft = null;
                root.bottomRight = null;
            }
        }
        return root;
    }

    return helper(0, 0, grid.length - 1, grid.length - 1);
}
