function longestIncreasingPath(matrix: number[][]): number {
    const ROW = matrix.length, COL = matrix[0].length;
    const dp: number[][] = []; // each cell : [from, to]
    for (let i = 0; i < ROW; i++) {
        dp.push(Array(COL));
    }

    let res = 1;
    const DIRECTIONS: number[][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    function dfs(i: number, j: number) {
        if (dp[i][j] === undefined) dp[i][j] = 1;
        DIRECTIONS.forEach(([toI, toJ]) => {
            const nextI = i + toI, nextJ = j + toJ;
            if (nextI >= 0 && nextJ >= 0 && nextI < ROW && nextJ < COL && matrix[nextI][nextJ] > matrix[i][j]) {
                if (dp[nextI][nextJ] === undefined) {
                    dfs(nextI, nextJ);
                }
                dp[i][j] = Math.max(dp[i][j], dp[nextI][nextJ] + 1);
                res = Math.max(res, dp[i][j]);
            }
        })
    }
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (dp[i][j] === undefined) {
                dfs(i, j);
            }
        }
    }
    return res;
};