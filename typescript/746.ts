function minCostClimbingStairs(cost: number[]): number {
    const minCosts: number[] = new Array(cost.length + 1).fill(0);
    for (let i = 2; i < minCosts.length; i++) {
        minCosts[i] = Math.min(minCosts[i - 1] + cost[i - 1], minCosts[i - 2] + cost[i - 2]);
    }
    return minCosts[cost.length];
};