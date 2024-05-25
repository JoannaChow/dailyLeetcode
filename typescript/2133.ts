function checkValid(matrix: number[][]): boolean {
    const rows = matrix.length,
        cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        const check_arr: boolean[] = Array(rows).fill(false);
        check_arr[matrix[i][0]] = true;
        for (let j = 1; j < cols; j++) {
            if (check_arr[matrix[i][j]]) return false;
            check_arr[matrix[i][j]] = true;
        }
    }

    for (let j = 0; j < cols; j++) {
        const check_arr: boolean[] = Array(rows).fill(false);
        check_arr[matrix[0][j]] = true;
        for (let i = 1; i < rows; i++) {
            if (check_arr[matrix[i][j]]) return false;
            check_arr[matrix[i][j]] = true;
        }
    }
    return true;
}
