function maxProfit(prices: number[]): number {
    const dp: Record<string, number> = {};

    function dfs(i: number, buying: boolean): number {
        if (i >= prices.length) {
            return 0;
        }

        if (`${i},${buying}` in dp) {
            return dp[`${i},${buying}`];
        }

        if (buying) {
            const buy = dfs(i + 1, !buying) - prices[i];
            const cooldown = dfs(i + 1, buying);
            dp[`${i},${buying}`] = Math.max(buy, cooldown)
        } else {
            const sell = dfs(i + 2, !buying) + prices[i];
            const cooldown = dfs(i + 1, buying);
            dp[`${i},${buying}`] = Math.max(sell, cooldown)
        }

        return dp[`${i},${buying}`];
    }
    return dfs(0, true);
};