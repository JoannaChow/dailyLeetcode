function findTargetSumWays(nums: number[], target: number): number {
    const dp = {}; // key: index,total  => # of ways

    function backtrack(index: number, total: number) {
        if (index === nums.length) {
            return total === target ? 1 : 0;
        }
        if (`${index},${total}` in dp) {
            return dp[`${index},${total}`];
        }

        dp[`${index},${total}`] = (
            backtrack(index + 1, total + nums[index]) +
            backtrack(index + 1, total - nums[index])
        );
        return dp[`${index},${total}`];
    }

    return backtrack(0, 0);
};