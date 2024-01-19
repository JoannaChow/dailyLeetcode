function missingNumber(nums: number[]): number {
    let total = nums.length, realTotal = 0;
    for (let i = 0; i < nums.length; i++) {
        total += i;
        realTotal += nums[i];
    }
    return total - realTotal;
};