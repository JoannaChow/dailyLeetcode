function numWays(words: string[], target: string): number {
    const mod = Math.pow(10, 9) + 7;
    const targetLen = target.length,
        wordLen = words[0].length;
    const dp = Array.from({ length: targetLen }, () => Array(wordLen).fill(-1));
    function match(i: number, k: number) {
        if (wordLen - k < targetLen - i) {
            return 0;
        }
        if (i >= targetLen) {
            return 1;
        }
        if (dp[i][k] !== -1) {
            return dp[i][k];
        }
        let count = 0;
        const validCount = words.filter((word) => {
            return word[k] === target[i];
        }).length;
        count += (validCount * match(i + 1, k + 1)) % mod;
        count += match(i, k + 1) % mod;
        dp[i][k] = count % mod;
        return dp[i][k];
    }

    return match(0, 0);
}
