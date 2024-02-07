function maxCoins(nums: number[]): number {
    nums.unshift(1);
    nums.push(1);
    const dp = new Map();

    function dfs(left, right): number {
        if (left > right) {
            return 0;
        }

        const key = `${left},${right}`;
        if (dp.has(key)) {
            return dp.get(key);
        }

        dp.set(key, 0);
        for (let i = left; i <= right; i++) {
            let coins = nums[left - 1] * nums[i] * nums[right + 1];
            coins += dfs(left, i - 1) + dfs(i + 1, right);
            dp.set(key, Math.max(dp.get(key), coins));
        }
        return dp.get(key);
    }

    return dfs(1, nums.length - 2);
};