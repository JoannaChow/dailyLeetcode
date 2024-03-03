function numTrees(n: number): number {
    const cache: Record<number, number> = {};
    cache[-1] = 1;
    cache[0] = 1;
    function combination(from: number, end: number): number {
        if (cache[end - from]) return cache[end - from];
        let count = 0;
        for (let i = from; i <= end; i++) {
            count += combination(from, i - 1) * combination(i + 1, end);
        }
        cache[end - from] = count;
        return count;
    }
    return combination(0, n - 1);
}
