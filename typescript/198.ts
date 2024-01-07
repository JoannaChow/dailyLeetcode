function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    let m1 = nums[0], m2 = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        const m3 = Math.max(m2, m1 + nums[i]);
        m1 = m2;
        m2 = m3;
    }
    return Math.max(m1, m2);
};