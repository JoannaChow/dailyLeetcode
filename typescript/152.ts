function maxProduct(nums: number[]): number {
    let max = Math.max(...nums);
    let curMax = 1, curMin = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            curMax = 1;
            curMin = 1;
            continue;
        }

        const tempMax = nums[i] * curMax, tempMin = nums[i] * curMin;
        curMax = Math.max(tempMax, tempMin, nums[i]);
        curMin = Math.min(tempMax, tempMin, nums[i]);
        max = Math.max(max, curMax);
    }
    return max;
};