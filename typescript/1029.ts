function twoCitySchedCost(costs: number[][]): number {
    const diff = costs.map(([a, b], index) => [b - a, index, a, b]);
    diff.sort((a, b) => a[0] - b[0]);
    let min = 0;
    const n = costs.length / 2;
    for (let i = 0; i < n; i++) {
        min += diff[i][3];
        min += diff[i + n][2];
    }
    return min;
}
