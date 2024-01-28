function minDistance(word1: string, word2: string): number {
    const dp: number[][] = [];
    for (let i = 0; i < word1.length + 1; i++) {
        dp.push(Array(word2.length + 1).fill(-1));
        dp[i][word2.length] = word1.length - i;
    }
    for (let i = 0; i < word2.length + 1; i++) {
        dp[word1.length][i] = word2.length - i;
    }

    for (let i = word1.length - 1; i >= 0; i--) {
        for (let j = word2.length - 1; j >= 0; j--) {
            if (word1[i] === word2[j]) {
                dp[i][j] = dp[i + 1][j + 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i][j + 1],
                    dp[i + 1][j],
                    dp[i + 1][j + 1]
                )
            }
        }
    }
    return dp[0][0];
};