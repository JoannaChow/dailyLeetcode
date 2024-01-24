/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length;
    for (let i = 0; i <= Math.floor(n / 2); i++) {
        for (let j = i; j < n - 1 - i; j++) {
            let temp = 0;
            let row = i, col = j;
            for (let k = 0; k < 4; k++) {
                const newRow = col, newCol = n - 1 - row;
                const curVal = matrix[newRow][newCol];
                matrix[newRow][newCol] = k !== 0 ? temp : matrix[row][col];
                temp = curVal;
                row = newRow;
                col = newCol;
            }
        }
    }
};