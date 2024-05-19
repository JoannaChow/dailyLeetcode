function calcEquation(
    equations: string[][],
    values: number[],
    queries: string[][]
): number[] {
    const variables: { [key: string]: number[] } = {}; //{ a: [] of equation index }
    equations.forEach(([a, b], index) => {
        if (!variables[a]) variables[a] = [];
        variables[a].push(index);
        if (!variables[b]) variables[b] = [];
        variables[b].push(index);
    });

    const output: number[] = [];
    for (const [c, d] of queries) {
        if (!variables[c] || !variables[d]) {
            output.push(-1.0);
            continue;
        }
        // find a path from c to d
        const path: Set<string> = new Set([c]);
        output.push(dfs(path, 1, c, d));
    }
    return output;
    function dfs(
        path: Set<string>,
        value: number,
        from: string,
        target: string
    ) {
        if (!variables[from] || !variables[target]) return -1.0;
        if (from === target) return 1.0;

        for (let i = 0; i < variables[from].length; i++) {
            const index = variables[from][i];
            const [a, b] = equations[index];
            if ((a === from && path.has(b)) || (b === from && path.has(a))) {
                continue;
            }
            if (a === from && b === target) {
                return value * values[index];
            }
            if (a === target && b === from) {
                return value / values[index];
            }

            if (a === from) {
                const ret = dfs(path.add(b), value * values[index], b, target);
                if (ret !== -1.0) return ret;
                path.delete(b);
            } else {
                const ret = dfs(path.add(a), value / values[index], a, target);
                if (ret !== -1.0) return ret;
                path.delete(a);
            }
        }
        return -1.0;
    }
}
