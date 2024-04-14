function minReorder(n: number, connections: number[][]): number {
    const map: Record<number, number[]> = {};
    const neighbours: Record<number, number[]> = {};
    let count = 0;
    const checked: Set<number> = new Set();
    connections.forEach(([a, b]) => {
        if (!map[a]) map[a] = [b];
        else map[a].push(b);
        if (!neighbours[a]) neighbours[a] = [b];
        else neighbours[a].push(b);
        if (!neighbours[b]) neighbours[b] = [a];
        else neighbours[b].push(a);
    });

    function dfs(i: number) {
        if (neighbours[i]) {
            for (let j = 0; j < neighbours[i].length; j++) {
                const neighbour = neighbours[i][j];
                if (checked.has(neighbour)) {
                    continue;
                }

                // reorder
                if (!map[neighbour] || !map[neighbour].includes(i)) {
                    count++;
                }
                checked.add(neighbour);
                dfs(neighbour);
            }
        }
    }
    checked.add(0);
    dfs(0);
    return count;
}
