function coinChange(coins: number[], amount: number): number {
    const table = Array(amount + 1).fill(Infinity);
    table[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                table[i] = Math.min(table[i], 1 + table[i - coin]);
            }
        }
    }
    return table[amount] === Infinity ? -1 : table[amount];
}
