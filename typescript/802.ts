function eventualSafeNodes(graph: number[][]): number[] {
    const safe: number[] = Array(graph.length).fill(-1);
    let path: number[] = Array(graph.length).fill(-1);
    for (let i = 0; i < graph.length; i++) {
        dfs(i);
    }
    function dfs(node: number) {
        if (graph[node].length === 0) {
            safe[node] = node;
            return true;
        }

        for (let next of graph[node]) {
            if (safe[next] !== -1) continue;
            if (path[next] !== -1) {
                // cycle found
                return false;
            }

            path[next] = next;
            if (!dfs(next)) return false;
            path[next] = -1;
        }
        safe[node] = node;
        return true;
    }

    return safe.filter((v) => v !== -1);
}
