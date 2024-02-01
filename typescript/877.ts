function stoneGame(piles: number[]): boolean {
    const dp = new Map();

    function dfs(curPiles: number[], alice: number, bob: number, isAliceTurn: boolean): boolean {
        if (curPiles.length === 0) {
            return alice > bob;
        }

        const key = `${curPiles.length},${alice},${bob}`;
        if (dp.has(key)) {
            return dp.get(key);
        }

        const first = curPiles[0];
        curPiles.shift();
        const choseFirst = dfs(curPiles, alice + (isAliceTurn ? first : 0), bob + (!isAliceTurn ? first : 0), !isAliceTurn);
        curPiles.unshift(first);
        const last = curPiles[curPiles.length - 1];
        curPiles.pop();
        const choseLast = dfs(curPiles, alice + (isAliceTurn ? last : 0), bob + (!isAliceTurn ? last : 0), !isAliceTurn);
        dp.set(key, choseFirst || choseLast);
        return dp.get(key);
    }
    return dfs(piles, 0, 0, true);
};