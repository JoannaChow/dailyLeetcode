function minPathSum(grid: number[][]): number {
    const height = grid.length, width = grid[0].length;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const curVal = grid[i][j];
            if (i > 0) {
                grid[i][j] = curVal + grid[i - 1][j];
            }
            if (j > 0) {
                const addedLeft = curVal + grid[i][j - 1];
                grid[i][j] =
                    i == 0 ? addedLeft : Math.min(grid[i][j], addedLeft);
            }
        }
    }
    return grid[height-1][width-1];
}
