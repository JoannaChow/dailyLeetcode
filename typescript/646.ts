function findLongestChain(pairs: number[][]): number {
    pairs.sort((a, b) => a[0] - b[0]);
    let count = 1,
        endSoFar = pairs[0][1];
    for (let i = 1; i < pairs.length; i++) {
        if (pairs[i][0] > endSoFar) {
            count++;
            endSoFar = pairs[i][1];
        } else {
            endSoFar = Math.min(endSoFar, pairs[i][1]);
        }
    }
    return count;
}
