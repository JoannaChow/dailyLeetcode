function majorityElement(nums: number[]): number {
    const hash = new Map();
    const half = Math.floor(nums.length / 2);
    let ans = 0;
    for (const num of nums) {
        hash.set(num, (hash.get(num) ?? 0) + 1);
        if (hash.get(num) > half) {
            ans = num;
            break;
        }
    }
    return ans;
};