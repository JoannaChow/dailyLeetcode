function lastStoneWeightII(stones: number[]): number {
    const stoneSum = stones.reduce((a, b) => a + b);
    const target = Math.floor(stoneSum / 2);
    const dp = new Map();

    function dfs(index, total) {
        const mapkey = `${index},${total}`;
        if (total >= target || index === stones.length) {
            return Math.abs(2 * total - stoneSum)
        }
        if (dp.has(mapkey)) return dp.get(mapkey);

        dp.set(mapkey, Math.min(
            dfs(index + 1, total),
            dfs(index + 1, total + stones[index])
        ));
        return dp.get(mapkey);
    }
    return dfs(0, 0);
};