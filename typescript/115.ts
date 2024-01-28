function numDistinct(s: string, t: string): number {
    const dp: number[][] = [];
    for (let i = 0; i < s.length; i++) {
        dp.push(Array(t.length).fill(-1));
    }

    function dfs(sIndex: number, tIndex: number): number {
        if (tIndex === t.length) {
            return 1;
        } else if (sIndex === s.length) {
            return 0;
        } else if (dp[sIndex][tIndex] !== -1) {
            return dp[sIndex][tIndex];
        }

        if (s[sIndex] === t[tIndex]) {
            dp[sIndex][tIndex] = dfs(sIndex + 1, tIndex + 1) + dfs(sIndex + 1, tIndex);
        } else {
            dp[sIndex][tIndex] = dfs(sIndex + 1, tIndex);
        }

        return dp[sIndex][tIndex];
    }

    return dfs(0, 0);
};