function eventualSafeNodes(graph: number[][]): number[] {
    const safe: Set<number> = new Set();
    const unsafe: Set<number> = new Set();
    let path: number[] = [];
    for (let i = 0; i < graph.length; i++) {
        dfs(i);
    }
    function dfs(node: number) {
        if (graph[node].length === 0) {
            safe.add(node);
            return true;
        }

        for (let next of graph[node]) {
            if (safe.has(next)) continue;
            if (unsafe.has(next) || path.includes(next)) {
                // cycle found
                path.forEach((p) => unsafe.add(p));
                return false;
            }

            path.push(next);
            if (!dfs(next)) return false;
            path.pop();
        }
        safe.add(node);
        return true;
    }
    const ret: number[] = [];
    safe.forEach((v1) => {
        ret.push(v1);
    });
    ret.sort((a, b) => a - b);
    return ret;
}
