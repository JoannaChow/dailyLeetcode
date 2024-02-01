function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const N = obstacleGrid.length, M = obstacleGrid[0].length;
    if (obstacleGrid[N - 1][M - 1] === 1) return 0;
    const dp: number[][] = [];
    for (let i = 0; i < N; i++) {
        dp.push(Array(M).fill(-1));
    }
    dp[N - 1][M - 1] = 1;
    for (let i = N - 2; i >= 0; i--) {
        dp[i][M - 1] = obstacleGrid[i][M - 1] === 1 ? 0 : Math.min(dp[i + 1][M - 1], 1);
    }
    for (let i = M - 2; i >= 0; i--) {
        dp[N - 1][i] = obstacleGrid[N - 1][i] === 1 ? 0 : Math.min(dp[N - 1][i + 1], 1);
    }

    for (let i = N - 2; i >= 0; i--) {
        for (let j = M - 2; j >= 0; j--) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
            }
        }
    }
    return dp[0][0];
};