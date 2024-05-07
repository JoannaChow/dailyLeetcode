function maxScore(cardPoints: number[], k: number): number {
    const totalCards = cardPoints.length;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += cardPoints[i];
    }
    if (k >= totalCards) return sum;

    let curMax = sum;
    for (let j = 1; j <= k; j++) {
        sum += cardPoints[totalCards - j];
        sum -= cardPoints[k - j];
        curMax = Math.max(curMax, sum);
    }
    return curMax;
}
