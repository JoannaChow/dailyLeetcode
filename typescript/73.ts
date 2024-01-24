/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const rows: Set<number> = new Set();
    const cols: Set<number> = new Set();
    matrix.forEach((row, i) => {
        row.forEach((cell, j) => {
            if (cell === 0) {
                rows.add(i);
                cols.add(j);
            }
        })
    })

    matrix.forEach((row, i) => {
        row.forEach((cell, j) => {
            if (rows.has(i) || cols.has(j)) {
                matrix[i][j] = 0;
            }
        })
    })
};