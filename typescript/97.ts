function isInterleave(s1: string, s2: string, s3: string): boolean {
    // O(n*m)
    if (s1.length + s2.length !== s3.length) {
        return false;
    }

    const dp: boolean[][] = [];
    for (let i = 0; i < s1.length + 1; i++) {
        dp.push(Array(s2.length + 1).fill(false));
    }
    dp[s1.length][s2.length] = true;

    for (let i = s1.length; i >= 0; i--) {
        for (let j = s2.length; j >= 0; j--) {
            if (i < s1.length && s1[i] === s3[i + j] && dp[i + 1][j]) {
                dp[i][j] = true;
            }
            if (j < s2.length && s2[j] === s3[i + j] && dp[i][j + 1]) {
                dp[i][j] = true;
            }
        }
    }
    return dp[0][0];
}

/* O(2^n+m)
function isInterleave(s1: string, s2: string, s3: string): boolean {
    // memoization
    const dp = {};

    function dfs(i: number, j: number): boolean {
        if (i === s1.length && j === s2.length) {
            return true;
        }
        const dpKey = `${i},${j}`;
        if (dpKey in dp) {
            return dp[dpKey];
        }

        if (i < s1.length && s1[i] === s3[i + j] && dfs(i + 1, j)) {
            return true;
        }
        if (j < s2.length && s2[j] === s3[i + j] && dfs(i, j + 1)) {
            return true;
        }
        dp[dpKey] = false;
        return false;
    }

    return dfs(0, 0);
};
*/