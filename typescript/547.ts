function findCircleNum(isConnected: number[][]): number {
    const parent: number[] = [], rank: number[] = [];
    for (let i = 0; i < isConnected.length; i++) {
        parent.push(i);
        rank.push(1);
    }

    function find(num) {
        let res = num;
        while (res !== parent[res]) {
            parent[res] = parent[parent[res]];
            res = parent[res];
        }
        return res;
    }
    function union(n1: number, n2: number) {
        const p1 = find(n1), p2 = find(n2);
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

    let result = isConnected.length;
    for (let i = 0; i < isConnected.length; i++) {
        for (let j = i; j < isConnected.length; j++) {
            if (isConnected[i][j] === 1) {
                if (union(i, j)) {
                    result--;
                }
            }
        }
    }
    return result;
};