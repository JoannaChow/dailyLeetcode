function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = [];

    function dfs(index: number, combination: number[], sum: number) {
        if (sum === target) {
            res.push([...combination]);
            return;
        }
        if (index >= candidates.length || sum > target) {
            return;
        }
        combination.push(candidates[index]);
        dfs(index, combination, sum + candidates[index]);

        combination.pop();
        dfs(index + 1, combination, sum);
    }
    dfs(0, [], 0);
    return res;
};