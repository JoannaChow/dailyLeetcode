function numWays(words: string[], target: string): number {
    const wordLength = words[0].length;
    const targetLength = target.length;
    if (targetLength > wordLength) return 0;

    const mod = Math.pow(10, 9) + 7;
    const dp = Array.from({ length: wordLength + 1 }, () =>
        Array(targetLength + 1).fill(-1)
    );
    const charCountMap = Array.from(
        { length: wordLength + 1 },
        () => new Map()
    );

    for (let w = 0; w < wordLength; w++) {
        words.forEach((word) => {
            const c = charCountMap[w].get(word[w]) ?? 0;
            charCountMap[w].set(word[w], c + 1);
        });
    }

    for (let i = targetLength; i >= 0; i--) {
        for (let j = wordLength; j >= 0; j--) {
            if (wordLength - j < targetLength - i) {
                dp[j][i] = 0;
            } else if (i === targetLength) {
                dp[j][i] = 1;
            } else {
                const validCount = charCountMap[j].get(target[i]) ?? 0;
                dp[j][i] = (validCount * dp[j + 1][i + 1] + dp[j + 1][i]) % mod;
            }
        }
    }
    return dp[0][0];
}
