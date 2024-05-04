function minCost(n: number, cuts: number[]): number {
    const dp = {};
    function dfs(l: number, r: number) {
        const label = `${l},${r}`;
        if (dp[label] !== -1) {
            return dp[label];
        }
        let res = Infinity;
        for (let cut of cuts) {
            if (l < cut && cut < r) {
                res = Math.min(res, dfs(l, cut) + dfs(cut, r));
            }
        }

        dp[label] = res === Infinity ? 0 : r - l + res;

        return dp[label];
    }
    return dfs(0, n);
}
