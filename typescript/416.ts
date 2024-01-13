function canPartition(nums: number[]): boolean {
    let totalSum = 0;
    nums.forEach(n => totalSum += n);
    if (totalSum % 2 === 1) return false;
    const target = totalSum / 2;
    const dp: boolean[] = Array(target + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            if (dp[j - nums[i]]) {
                if (j === target) {
                    return true;
                }
                dp[j] = true;
            }
        }
    }
    return false;
};