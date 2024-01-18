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