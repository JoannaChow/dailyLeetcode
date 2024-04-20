function maximalSquare(matrix: string[][]): number {
    const height = matrix.length,
        width = matrix[0].length,
        cache = Array(height)
            .fill(0)
            .map(() => Array(width).fill(0));
    let curMax = 0;
    for (let m = 0; m < height; m++) {
        for (let n = 0; n < width; n++) {
            cache[m][n] = parseInt(matrix[m][n], 10);
            curMax = Math.max(curMax, cache[m][n]);
        }
    }
    for (let m = height - 2; m >= 0; m--) {
        for (let n = width - 2; n >= 0; n--) {
            if (cache[m][n] === 1) {
                cache[m][n] += Math.min(
                    cache[m + 1][n],
                    cache[m][n + 1],
                    cache[m + 1][n + 1]
                );
                curMax = Math.max(cache[m][n], curMax);
            }
        }
    }
    return curMax * curMax;
}
