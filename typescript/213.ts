function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    // from left to right, exclude the last house
    let m1 = nums[0], m2 = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length - 1; i++) {
        const nextM1 = Math.max(m1, m2), nextM2 = Math.max(m1 + nums[i], m2);
        m2 = nextM2;
        m1 = nextM1;
    }
    const maxFromLeftToRight = Math.max(m1, m2);
    // from right to left, exclude the first house
    m1 = nums[nums.length - 1], m2 = Math.max(nums[nums.length - 1], nums[nums.length - 2]);
    for (let i = nums.length - 3; i > 0; i--) {
        const nextM1 = Math.max(m1, m2), nextM2 = Math.max(m1 + nums[i], m2);
        m2 = nextM2;
        m1 = nextM1;
    }
    const maxFromRightToLeft = Math.max(m1, m2);
    return Math.max(maxFromLeftToRight, maxFromRightToLeft);
};