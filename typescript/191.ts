function hammingWeight(n: number): number {
    let res = 0;
    while (n > 0) {
        res += n & 1;
        n = n >> 1;
    }
    return res;
};