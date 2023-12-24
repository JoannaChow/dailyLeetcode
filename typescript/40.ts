function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort();
    const res: number[][] = [];
    function backtrack(index: number, curCombination: number[], sum: number) {
        if (index >= candidates.length) {
            return;
        }
        let curIndex = index, curSum = sum, nextIndex = index + 1;
        while (nextIndex < candidates.length && candidates[nextIndex] === candidates[index]) {
            nextIndex++;
        }
        backtrack(nextIndex, curCombination.slice(), sum);
        while (curIndex < candidates.length && curIndex < nextIndex) {
            curCombination.push(candidates[curIndex]);
            if (curSum + candidates[curIndex] === target) {
                res.push(curCombination.slice());
            } else if (curSum + candidates[curIndex] < target) {
                curSum += candidates[curIndex]
                backtrack(nextIndex, curCombination.slice(), curSum);
                curIndex++;
                continue;
            }
            break;
        }
    }
    backtrack(0, [], 0);
    return res;
};