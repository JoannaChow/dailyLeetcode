function maxAlternatingSum(nums: number[]): number {
    const size = nums.length;
    const dp: number[][] = Array(size)
        .fill(0)
        .map(() => Array(2).fill(0));
    dp[0] = [0, nums[0]];
    for (let i = 1; i < size; i++) {
        dp[i] = [
            Math.max(dp[i - 1][0], dp[i - 1][1] - nums[i]),
            Math.max(dp[i - 1][1], dp[i - 1][0] + nums[i]),
        ];
    }
    return Math.max(dp[size - 1][0], dp[size - 1][1]);
}
