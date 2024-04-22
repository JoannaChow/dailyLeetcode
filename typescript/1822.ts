function rearrangeSticks(n: number, k: number): number {
    const mod = Math.pow(10, 9) + 7;
    const dp = Array(n + 1)
        .fill(0)
        .map(() => Array(k + 1).fill(-1));

    function numWays(n: number, k: number) {
        if (k === 0 || k > n) return 0;
        if (n <= 2) return 1;
        if (dp[n][k] !== -1) return dp[n][k];

        let ans = 0;
        // select the tallest
        ans = (ans + numWays(n - 1, k - 1)) % mod;
        // select any of n-1 that's not the tallest
        ans = (ans + (n - 1) * numWays(n - 1, k)) % mod;
        dp[n][k] = ans;
        return ans;
    }
    return numWays(n, k);
}
