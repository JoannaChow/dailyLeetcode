function findRedundantConnection(edges: number[][]): number[] {
    const parent: number[] = [], rank: number[] = [];
    for (let i = 0; i < edges.length; i++) {
        parent.push(i);
        rank.push(1);
    }
    function union(g1: number, g2: number) {
        const p1 = find(g1), p2 = find(g2);
        if (p1 === p2) {
            return false;
        }
        if (rank[p2] > rank[p1]) {
            parent[p1] = p2;
            rank[p2] += rank[p1];
        } else {
            parent[p2] = p1;
            rank[p1] += rank[p2];
        }
        return true;
    }
    function find(num: number) {
        let res = num;
        while (parent[res] !== res) {
            parent[res] = parent[parent[res]]; // shorten linked path
            res = parent[res];
        }
        return res;
    }

    const ret: number[] = [];
    for (let [a, b] of edges) {
        if (!union(a, b)) {
            ret.push(a, b);
            break;
        }
    }
    return ret;
};