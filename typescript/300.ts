function lengthOfLIS(nums: number[]): number {
    const dp: number[] = Array(nums.length).fill(0);
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
        let j = i - 1;
        while (j >= 0) {
            if (nums[j] < nums[i] && dp[j] > dp[i]) {
                dp[i] = dp[j];
            }
            j--;
        }
        dp[i]++;
        maxLength = Math.max(maxLength, dp[i]);
    }
    return maxLength;
};