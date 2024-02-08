function maxCoins(nums: number[]): number {
    nums.unshift(1);
    nums.push(1);
    const dp: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        dp.push(Array(nums.length).fill(0));
    }

    function dfs(left, right): number {
        if (left > right) {
            return 0;
        }

        if (dp[left][right] > 0) {
            return dp[left][right];
        }

        for (let i = left; i <= right; i++) {
            let coins = nums[left - 1] * nums[i] * nums[right + 1];
            coins += dfs(left, i - 1) + dfs(i + 1, right);
            if (coins > dp[left][right]) dp[left][right] = coins;
        }
        return dp[left][right];
    }

    return dfs(1, nums.length - 2);
};