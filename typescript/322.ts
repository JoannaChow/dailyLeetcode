function coinChange(coins: number[], amount: number): number {
    const minCounts = Array(amount + 1).fill(Infinity);
    minCounts[0] = 0;
    for (let amt = 1; amt <= amount; amt++) {
        coins.forEach(coin => {
            if (coin <= amt) {
                minCounts[amt] = Math.min(minCounts[amt], minCounts[amt - coin] + 1);
            }
        })
    }
    return minCounts[amount] === Infinity ? -1 : minCounts[amount];
};