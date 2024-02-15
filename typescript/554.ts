function leastBricks(wall: number[][]): number {
    const countCut: number[] = new Array(wall[0].reduce((a, b) => a + b)).fill(0);
    countCut[countCut.length - 1] = countCut.length;
    for (let row of wall) {
        let base = 0;
        for (let i = 0; i < row.length; i++) {
            for (let j = 1; j < row[i]; j++) {
                countCut[base + j - 1] += 1;
            }
            base += row[i];
        }
    }
    return countCut.reduce((a, b) => Math.min(a, b));
};