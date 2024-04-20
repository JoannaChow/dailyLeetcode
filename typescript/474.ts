function findMaxForm(strs: string[], m: number, n: number): number {
    const cache = Array(m + 1)
        .fill(0)
        .map(() => Array(n + 1).fill(0));
    for (let i = 0; i < strs.length; i++) {
        const zeros = strs[i].split("").filter((s) => s === "0").length;
        const ones = strs[i].length - zeros;
        for (let j = m; j >= zeros; j--) {
            for (let k = n; k >= ones; k--) {
                cache[j][k] = Math.max(
                    cache[j][k],
                    1 + cache[j - zeros][k - ones]
                );
            }
        }
    }
    return cache[m][n];
}
