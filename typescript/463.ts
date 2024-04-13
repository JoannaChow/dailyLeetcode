function islandPerimeter(grid: number[][]): number {
    const width = grid.length,
        height = grid[0].length;
    let perimeter = 0;
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            if (grid[i][j] === 1) {
                if (i === 0 || grid[i - 1][j] === 0) perimeter++;
                if (i + 1 === width || grid[i + 1][j] === 0) perimeter++;
                if (j === 0 || grid[i][j - 1] === 0) perimeter++;
                if (j + 1 === height || grid[i][j + 1] === 0) perimeter++;
            }
        }
    }
    return perimeter;
}
