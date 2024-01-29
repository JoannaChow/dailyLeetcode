function lastStoneWeightII(stones: number[]): number {
    const stoneSum = stones.reduce((a, b) => a + b);
    const target = Math.ceil(stoneSum / 2);
    const dp = {};

    function dfs(index, total) {
        const mapkey = `${index},${total}`;
        if (total >= target || index === stones.length) {
            return Math.abs(total - (stoneSum - total))
        }
        if (dp[mapkey]) {
            return dp[mapkey];
        }

        dp[mapkey] = Math.min(dfs(index + 1, total), dfs(index + 1, total + stones[index]));
        return dp[mapkey];
    }
    return dfs(0, 0);
};