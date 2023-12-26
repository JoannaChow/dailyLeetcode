function pacificAtlantic(heights: number[][]): number[][] {
    const res: number[][] = [], ROWs = heights.length, COLs = heights[0].length;
    const pacificSet: Set<string> = new Set(), atlanticSet: Set<string> = new Set(); // Set("x,y")
    function dfs(x: number, y: number, toX: number, toY: number, set: Set<string>) {
        if (x < 0 || x >= ROWs || y < 0 || y >= COLs || set.has(`${x},${y}`)) {
            return;
        }
        if (heights[x][y] >= heights[toX][toY]) {
            set.add(`${x},${y}`);
            dfs(x + 1, y, x, y, set);
            dfs(x - 1, y, x, y, set);
            dfs(x, y + 1, x, y, set);
            dfs(x, y - 1, x, y, set);
        }
    }

    for (let col = 0; col < COLs; col++) {
        pacificSet.add(`0,${col}`);
        dfs(1, col, 0, col, pacificSet);
        atlanticSet.add(`${ROWs - 1},${col}`);
        dfs(ROWs - 2, col, ROWs - 1, col, atlanticSet);
    }
    for (let row = 0; row < ROWs; row++) {
        pacificSet.add(`${row},0`);
        dfs(row, 1, row, 0, pacificSet);
        atlanticSet.add(`${row},${COLs - 1}`);
        dfs(row, COLs - 2, row, COLs - 1, atlanticSet);
    }
    pacificSet.forEach(coor => {
        if (atlanticSet.has(coor)) {
            const [x, y] = coor.split(",");
            res.push([Number(x), Number(y)]);
        }
    })
    return res;
};
