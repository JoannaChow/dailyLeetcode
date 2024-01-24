function spiralOrder(matrix: number[][]): number[] {
    const rowLen = matrix.length, colLen = matrix[0].length;
    const DIRECTION = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let DIRECTION_INDEX = 0;
    let row = 0, col = 0;
    const output: number[] = [];
    while (true) {
        output.push(matrix[row][col]);
        matrix[row][col] = NaN;
        let newRow = row + DIRECTION[DIRECTION_INDEX][0];
        let newCol = col + DIRECTION[DIRECTION_INDEX][1];
        if ((newRow < 0 || newRow >= rowLen || newCol < 0 || newCol >= colLen) || isNaN(matrix[newRow][newCol])) {
            DIRECTION_INDEX++;
            DIRECTION_INDEX %= 4;
            newRow = row + DIRECTION[DIRECTION_INDEX][0];
            newCol = col + DIRECTION[DIRECTION_INDEX][1];
            if ((newRow < 0 || newRow >= rowLen || newCol < 0 || newCol >= colLen) || isNaN(matrix[newRow][newCol])) break;
        }
        row = newRow;
        col = newCol;
    }
    return output;
};