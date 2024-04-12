function canPartitionKSubsets(nums: number[], k: number): boolean {
    const totalSum = nums.reduce((a, b) => a + b);
    if (totalSum % k) return false;

    const subsetSum = totalSum / k;
    nums.sort((a, b) => b - a);
    let comb: number[] = [];
    function backtrack(i: number) {
        if (i === nums.length) {
            return comb.length === 0 || comb.reduce((a, b) => a + b) === 0;
        }
        if (nums[i] > subsetSum) return false;
        if (nums[i] === subsetSum) return backtrack(i + 1);

        for (let j = 0; j < comb.length; j++) {
            const sum = comb[j] + nums[i];
            if (sum <= subsetSum) {
                const temp = comb[j];
                comb[j] = sum === subsetSum ? 0 : sum;
                if (backtrack(i + 1)) return true;
                comb[j] = temp;
            }
        }
        if (comb.length < k) {
            comb.push(nums[i]);
            if (backtrack(i + 1)) return true;
            comb.pop();
        }
        return false;
    }
    return backtrack(0);
}
