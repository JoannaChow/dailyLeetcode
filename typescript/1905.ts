function countSubIslands(grid1: number[][], grid2: number[][]): number {
    const width = grid2.length,
        height = grid2[0].length;
    let subIslandCount = 0;
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            if (grid2[i][j] === 1) {
                // explore the island and check sub-island
                if (explore(i, j)) subIslandCount++;
            }
        }
    }
    return subIslandCount;

    function explore(i: number, j: number): boolean {
        // return whether is a sub-island
        let isSubIsland = grid1[i][j] === 1;
        grid2[i][j] = 2;
        const DIRECTIONs = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];
        DIRECTIONs.forEach(([toX, toY]) => {
            let x = i + toX,
                y = j + toY;
            if (x >= 0 && x < width && y >= 0 && y < height) {
                if (grid2[x][y] === 1) {
                    if (!explore(x, y) || grid1[x][y] !== 1)
                        isSubIsland = false;
                }
            }
        });
        return isSubIsland;
    }
}
