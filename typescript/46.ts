function permute(nums: number[]): number[][] {
    const res: number[][] = [];
    function dfs(set: number[], candidates: number[]) {
        if (candidates.length === 1) {
            res.push([...set, candidates[0]]);
            return;
        }
        for (let i = 0; i < candidates.length; i++) {
            set.push(candidates[i]);
            dfs(set, candidates.filter((e, j) => j !== i));
            set.pop()
        }
    }
    dfs([], nums);
    return res;
};  