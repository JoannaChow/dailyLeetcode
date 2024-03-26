function combine(n: number, k: number): number[][] {
    const result: number[][] = [];

    function backtrack(start: number, comb: number[]) {
        if (comb.length === k) {
            result.push([...comb]);
            return;
        }

        for (let i = start; i < n + 1; i++) {
            comb.push(i);
            backtrack(i + 1, comb);
            comb.pop();
        }
    }
    backtrack(1, []);
    return result;
}
