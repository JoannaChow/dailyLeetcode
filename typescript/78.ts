function subsets(nums: number[]): number[][] {
    const res: number[][] = [];

    function dfs(index: number, subset: number[]) {
        const ret: number[][] = [];
        if (index === nums.length - 1) {
            res.push([...subset, nums[index]]);
            res.push(subset);
        } else {
            dfs(index + 1, [...subset, nums[index]]);
            dfs(index + 1, subset);
        }
    }
    dfs(0, []);
    return res;
};