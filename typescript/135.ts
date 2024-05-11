function candy(ratings: number[]): number {
    const n = ratings.length;
    ratings.unshift(ratings[0]);
    ratings.push(ratings[n - 1]);
    const candices = Array(n + 2).fill(1);
    let count = 0;
    // from left to right
    for (let i = 1; i <= n; i++) {
        if (ratings[i - 1] < ratings[i]) {
            candices[i] = candices[i - 1] + 1;
        }
    }

    // from right to left
    for (let i = n; i > 0; i--) {
        if (ratings[i] > ratings[i + 1] && candices[i] <= candices[i + 1]) {
            candices[i] = candices[i + 1] + 1;
        }
        count += candices[i];
    }
    return count;
}
