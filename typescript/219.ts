function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const table: Record<number, number> = {}; // value is sorted indices
    for (let i = 0; i < nums.length; i++) {
        if (table[nums[i]] === undefined) table[nums[i]] = i;
        else {
            if (Math.abs(table[nums[i]] - i) <= k) {
                return true;
            } else {
                table[nums[i]] = i;
            }
        }
    }
    return false;
}
