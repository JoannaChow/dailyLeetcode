function permuteUnique(nums: number[]): number[][] {
    const result: number[][] = [];

    nums.sort((a, b) => a - b);

    function backtrack(perm: number[], used: boolean[]) {
        if (perm.length === nums.length) {
            result.push([...perm]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }

            if (i > 0 && nums[i - 1] === nums[i] && !used[i - 1]) {
                // if previous identical number is used, use current number
                continue;
            }

            perm.push(nums[i]);
            used[i] = true;

            backtrack(perm, used);

            used[i] = false;
            perm.pop();
        }
    }

    backtrack([], Array(nums.length).fill(false));

    return result;
}
/* // too many converting & copying
function permuteUnique(nums: number[]): number[][] {
    function permutation(arr: number[]): Set<string> {
        if (arr.length === 1) {
            return new Set([`${arr[0]}`]);
        }
        const result: Set<string> = new Set();
        for (let i = 0; i < arr.length; i++) {
            const temp = [...arr];
            temp.splice(i, 1);
            const children = permutation(temp);
            children.forEach((c) => result.add(`${arr[i]},${c}`));
        }
        return result;
    }
    const set = permutation(nums);
    const ret: number[][] = [];
    set.forEach((v1, v2, s) => {
        ret.push(v1.split(",").map((num) => Number(num)));
    });
    return ret;
}
*/
