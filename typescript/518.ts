// Top-down
function change(amount: number, coins: number[]): number {
    const table = Array.from({ length: coins.length }, () =>
        Array(amount + 1).fill(-1)
    );
    return dfs(0, amount);
    function dfs(coinIndex: number, amount: number): number {
        if (amount === 0) return 1;
        if (coinIndex === coins.length) return 0;
        if (table[coinIndex][amount] !== -1) return table[coinIndex][amount];
        if (coins[coinIndex] > amount) {
            table[coinIndex][amount] = dfs(coinIndex + 1, amount);
        } else {
            table[coinIndex][amount] =
                dfs(coinIndex, amount - coins[coinIndex]) +
                dfs(coinIndex + 1, amount);
        }
        return table[coinIndex][amount];
    }
}

/* Bottom-up
function change(amount: number, coins: number[]): number {
    const dp: number[] = Array(amount + 1).fill(0);
    dp[0] = 1;

    for (let coin of coins) {
        for (let i = 0; i < dp.length; i++) {
            if (i - coin >= 0) {
                dp[i] += dp[i - coin];
            }
        }
    }
    return dp[amount];
};
*/
