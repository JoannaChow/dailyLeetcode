function numMusicPlaylists(n: number, goal: number, k: number): number {
    const mod = Math.pow(10, 9) + 7;
    const dp = Array(goal + 1)
        .fill(0)
        .map(() => Array(n + 1).fill(0));
    dp[0][0] = 1;

    for (let i = 1; i <= goal; i++) {
        for (let j = 1; j <= Math.min(i, n); j++) {
            dp[i][j] = (dp[i - 1][j - 1] * (n - j + 1)) % mod;
            if (j > k) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j] * (j - k)) % mod;
            }
        }
    }
    return dp[goal][n];
}
