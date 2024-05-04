function maxSubarraySumCircular(nums: number[]): number {
    let globMax = nums[0],
        globMin = nums[0],
        curMax = 0,
        curMin = 0,
        total = 0;

    for (const num of nums) {
        curMax = Math.max(curMax, num);
        curMin = Math.min(curMin, num);
        total += num;
        globMax = Math.max(globMax, curMax);
        globMin = Math.min(globMin, curMin);
    }

    return globMax > 0 ? Math.max(globMax, total - globMin) : globMax;
}
