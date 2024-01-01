function minCostConnectPoints(points: number[][]): number {
    const n = points.length;
    function manhattan(p1: number[], p2: number[]) {
        return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
    }

    // Prim's
    let res = 0;
    const visited: Set<number> = new Set();
    const costs: number[] = new Array(n).fill(Infinity);
    costs[0] = 0;
    for (let i = 0; i < n; i++) {
        let minCost = Infinity, point = -1;
        for (let j = 0; j < n; j++) {
            if (!visited.has(j) && costs[j] < minCost) {
                minCost = costs[j];
                point = j;
            }
        }
        res += minCost;
        visited.add(point);
        for (let j = 0; j < n; j++) {
            if (!visited.has(j)) {
                costs[j] = Math.min(costs[j], manhattan(points[point], points[j]))
            }
        }
    }
    return res;
};