function subarraySum(nums: number[], k: number): number {
    let count = 0,
        sum = 0,
        subCache: Map<number, number> = new Map();
    subCache.set(0, 1);

    for (const num of nums) {
        sum += num;
        if (subCache.get(sum - k)) {
            count += subCache.get(sum - k) as number;
        }
        subCache.set(sum, (subCache.get(sum) ?? 0) + 1);
    }
    return count;
}
