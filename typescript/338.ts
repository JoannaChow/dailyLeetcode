function countBits(n: number): number[] {
    const dp = Array(n + 1).fill(0);
    let offset = 1;

    for (let i = 0; i <= n; i++) {
        if (offset * 2 === i) {
            offset = i;
        }
        dp[i] = 1 + dp[i - offset];
    }
    return dp;
};