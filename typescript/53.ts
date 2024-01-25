function maxSubArray(nums: number[]): number {
    let ans = nums[0];
    let curSum = 0;
    for (let num of nums) {
        if (curSum < 0) {
            curSum = 0;
        }
        curSum += num;
        ans = Math.max(ans, curSum);
    }
    return ans;
};