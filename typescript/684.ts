function findRedundantConnection(edges: number[][]): number[] {
    const parent: number[] = [];
    for (let i = 0; i < edges.length; i++) {
        parent.push(i);
    }
    function union(g1: number, g2: number) {
        parent[find(g1)] = find(g2);
    }
    function find(num: number) {
        if (parent[num] != num) {
            return find(parent[num]);
        }
        return num;
    }

    const ret: number[] = [];
    for (let [a, b] of edges) {
        if (find(a) === find(b)) {
            ret.push(a, b);
            break;
        }
        union(a, b);
    }
    return ret;
};