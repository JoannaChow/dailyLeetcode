function stoneGameII(piles: number[]): number {
    const dp = new Map();

    function dfs(index: number, isAliceTurn: boolean, M: number): number {
        if (index === piles.length) {
            return 0;
        }

        const key = `${index},${isAliceTurn},${M}`;
        if (dp.has(key)) {
            return dp.get(key);
        }

        let curMax = isAliceTurn ? 0 : Infinity, takingWeight = 0;
        for (let x = 1; x <= 2 * M; x++) {
            if ((index + x) > piles.length) {
                break;
            }
            takingWeight += piles[index + x - 1];
            const nextTurn = dfs(index + x, !isAliceTurn, Math.max(x, M));
            if (isAliceTurn) {
                curMax = Math.max(curMax, takingWeight + nextTurn);
            } else {
                curMax = Math.min(curMax, nextTurn);
            }

        }

        dp.set(key, curMax);
        return curMax;
    }

    return dfs(0, true, 1);
};