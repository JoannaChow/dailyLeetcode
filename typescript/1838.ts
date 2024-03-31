function maxFrequency(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let max = 0,
        remaining = k,
        left = 0;
    for (let right = 1; right < nums.length; right++) {
        let gap = (nums[right] - nums[right - 1]) * (right - left);
        if (gap <= remaining) {
            max = Math.max(max, right - left + 1);
        } else {
            remaining += nums[right - 1] - nums[left];
            left++;
            gap = (nums[right] - nums[right - 1]) * (right - left);
        }
        remaining -= gap;
    }
    return max;
}
