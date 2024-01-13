function wordBreak(s: string, wordDict: string[]): boolean {
    const dp: boolean[] = Array(s.length + 1).fill(undefined);
    dp[s.length] = true;
    for (let i = s.length - 1; i >= 0; i--) {
        let substr = s.substring(i);
        for (const word of wordDict) {
            if (substr.substring(0, word.length) === word) {
                if (dp[i + word.length]) {
                    dp[i] = true;
                    break;
                }
            }
        }
        if (dp[i] === undefined) dp[i] = false;
    }
    return dp[0];
};