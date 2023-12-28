export class Solution {
    /**
     * @param rooms: m x n 2D grid
     * @return: nothing
     */
    wallsAndGates(rooms: number[][]) {
        // write your code here
        const queue: number[][] = [];
        const ROWs = rooms.length, COLs = rooms[0].length;
        for (let i = 0; i < ROWs; i++) {
            for (let j = 0; j < COLs; j++) {
                if (rooms[i][j] === 0) {
                    queue.push([i, j]);
                }
            }
        }
        while (queue.length) {
            const [x, y] = queue.shift() as number[];
            FillIfCloser(x - 1, y, rooms[x][y] + 1);
            FillIfCloser(x + 1, y, rooms[x][y] + 1);
            FillIfCloser(x, y - 1, rooms[x][y] + 1);
            FillIfCloser(x, y + 1, rooms[x][y] + 1);
        }

        function FillIfCloser(x: number, y: number, filling: number) {
            if (x < 0 || x >= ROWs || y < 0 || y >= COLs || rooms[x][y] <= filling) {
                return;
            }
            rooms[x][y] = filling;
            queue.push([x, y]);
        }
    }
}