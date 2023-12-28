function orangesRotting(grid: number[][]): number {
    // BFS
    const queue: number[][] = [], ROWs = grid.length, COLs = grid[0].length;
    let remainingOne = 0;
    for (let i = 0; i < ROWs; i++) {
        for (let j = 0; j < COLs; j++) {
            if (grid[i][j] === 1) {
                remainingOne++;
            } else if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }
    let clock = 0;
    while (queue.length > 0 && remainingOne > 0) {
        let curLength = queue.length;
        while (curLength > 0) {
            const [x, y] = queue.shift() as number[];
            rottenIfOne(x - 1, y);
            rottenIfOne(x + 1, y);
            rottenIfOne(x, y - 1);
            rottenIfOne(x, y + 1);
            curLength--;
        }
        clock++;
    }
    if (remainingOne > 0) {
        return -1;
    }
    return clock;
    function rottenIfOne(x: number, y: number) {
        if (x < 0 || x >= ROWs || y < 0 || y >= COLs || grid[x][y] !== 1) {
            return false;
        }
        remainingOne--;
        grid[x][y] = 2;
        queue.push([x, y]);
        return true;
    }
};