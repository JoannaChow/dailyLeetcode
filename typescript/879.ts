function profitableSchemes(
    n: number,
    minProfit: number,
    group: number[],
    profit: number[]
): number {
    const mod = Math.pow(10, 9) + 7;
    const crimes = group.length;
    const dp = Array.from({ length: crimes + 1 }, () =>
        Array.from({ length: n + 1 }, () => Array(minProfit + 1).fill(0))
    );

    for (let m = 0; m <= n; m++) {
        dp[crimes][m][minProfit] = 1;
    }

    for (let i = crimes - 1; i >= 0; i--) {
        for (let m = 0; m <= n; m++) {
            for (let p = 0; p <= minProfit; p++) {
                dp[i][m][p] = dp[i + 1][m][p];
                if (m + group[i] <= n) {
                    dp[i][m][p] +=
                        dp[i + 1][m + group[i]][
                            Math.min(minProfit, p + profit[i])
                        ] % mod;
                }
            }
        }
    }
    return dp[0][0][0] % mod;
    /*
    const dp = {};
    function dfs(i: number, members: number, p: number): number {
        if (members <= 0 || i === crimes) {
            return p >= minProfit ? 1 : 0;
        }

        const key = `${i},${members},${p}`;
        if (dp[key]) {
            return dp[key];
        }
        dp[key] = dfs(i + 1, members, p) % mod; // skip i
        if (members - group[i] >= 0) {
            dp[key] += dfs(i + 1, members - group[i], p + profit[i]) % mod; // do i
        }
        return dp[key];
    }
    return dfs(0, n, 0);
    */
}
