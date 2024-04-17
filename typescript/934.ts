function shortestBridge(grid: number[][]): number {
    // find one island, mark as 2
    const width = grid.length,
        height = grid[0].length;
    let startX = -1,
        startY = -1;
    for (let i = 0; i < width; i++) {
        let found = false;
        for (let j = 0; j < height; j++) {
            if (grid[i][j] === 1) {
                startX = i;
                startY = j;
                found = true;
                break;
            }
        }
        if (found) break;
    }

    const DIRECTIONs = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];
    const edge: number[][] = [];
    dfs_explore_island(startX, startY);
    function dfs_explore_island(x: number, y: number) {
        grid[x][y] = 2;
        for (let [toX, toY] of DIRECTIONs) {
            const nextX = x + toX,
                nextY = y + toY;
            if (nextX < 0 || nextX >= width || nextY < 0 || nextY >= height)
                continue;

            if (grid[nextX][nextY] === 1) {
                dfs_explore_island(nextX, nextY);
            } else {
                edge.push([x, y]);
            }
        }
    }

    let ans = -1;
    while (edge.length) {
        const [x, y] = edge.shift() as number[];
        for (let [toX, toY] of DIRECTIONs) {
            const nextX = x + toX,
                nextY = y + toY;
            if (nextX < 0 || nextX >= width || nextY < 0 || nextY >= height)
                continue;
            if (grid[nextX][nextY] === 0) {
                grid[nextX][nextY] = grid[x][y] + 1;
                edge.push([nextX, nextY]);
            } else if (grid[nextX][nextY] === 1) {
                // reach the other island
                ans = grid[x][y] - 2;
                break;
            }
        }
        if (ans !== -1) break;
    }
    return ans;
}
