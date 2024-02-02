function isMatch(s: string, p: string): boolean {
    const dp = new Map();

    function dfs(i: number, j: number): boolean {
        if (i === s.length && j === p.length) return true;
        if (j === p.length) return false;
        if (i === s.length) {
            if (j + 1 < p.length && p[j + 1] === "*") {
                return dfs(i, j + 2);
            } else {
                return false;
            }
        }

        const key = `${i},${j}`;
        if (dp.has(key)) {
            return dp.get(key);
        }

        let val = false;
        if (j + 1 < p.length && p[j + 1] === "*") {
            if (p[j] !== "." && s[i] !== p[j]) {
                val = dfs(i, j + 2);
            } else {
                val = dfs(i, j + 2) || dfs(i + 1, j);
            }
        } else if (p[j] === "." || s[i] === p[j]) {
            val = dfs(i + 1, j + 1);
        }


        dp.set(key, val);
        return val;
    }
    return dfs(0, 0);
};