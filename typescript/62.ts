function uniquePaths(m: number, n: number): number {
    const dp: number[][] = [];
    for (let i = 0; i < m; i++) {
        dp.push(Array(n).fill(0));
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i === m - 1 || j === n - 1) {
                dp[i][j] = 1;
                continue;
            }
            dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
        }
    }
    return dp[0][0];
};