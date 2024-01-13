function maxProduct(nums: number[]): number {
    let curMax = 1, curMin = 1;
    let max = nums[0];
    for (let num of nums) {
        if (num === 0) {
            curMax = 1;
            curMin = 1;
            if (max < 0) max = 0;
            continue;
        }

        const tempMax = curMax * num, tempMin = curMin * num;
        curMax = Math.max(tempMax, tempMin, num);
        curMin = Math.min(tempMax, tempMin, num);
        max = Math.max(max, curMax);
    }
    return max;
}