function generate(numRows: number): number[][] {
    const ret: number[][] = [];
    for (let i = 0; i < numRows; i++) {
        const curRow: number[] = Array(i + 1).fill(0);
        curRow[0] = 1;
        curRow[i] = 1;
        for (let j = 1; j < i; j++) {
            curRow[j] = ret[i - 1][j - 1] + ret[i - 1][j];
        }
        ret.push(curRow);
    }
    return ret;
};