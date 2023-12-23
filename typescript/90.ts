function subsetsWithDup(nums: number[]): number[][] {
    const hash: Record<number, number> = {};
    const res: number[][] = [];
    for (let num of nums) {
        if (hash[num] === undefined) {
            hash[num] = 1;
        } else {
            hash[num]++;
        }
    }
    const hashKeys = Object.keys(hash);
    function backtrack(keyIndex: number, subset: number[]) {
        for (let i = 0; i <= hash[hashKeys[keyIndex]]; i++) {
            if (keyIndex === hashKeys.length - 1) {
                res.push(subset.slice());
            } else {
                backtrack(keyIndex + 1, subset.slice());
            }
            subset.push(Number(hashKeys[keyIndex]));
        }
    }
    backtrack(0, []);
    return res;
};