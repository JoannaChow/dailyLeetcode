function maxValueOfCoins(piles: number[][], k: number): number {
    const dp = Array(k + 1).fill(0);
    for (let i = 0; i < piles.length; i++) {
        for (let j = k; j > 0; j--) {
            let sum = 0;
            for (let l = 1; l <= Math.min(j, piles[i].length); l++) {
                sum += piles[i][l - 1];
                dp[j] = Math.max(dp[j], sum + dp[j - l]);
            }
        }
    }
    return dp[k];
}
