function myPow(x: number, n: number): number {
    if (n === 0) return 1;
    if (n < 0) x = 1 / x;
    if (x === 1) return 1;
    n = Math.abs(n);

    return n % 2 === 1 ? x * myPow(x * x, (n - 1) / 2) : myPow(x * x, n / 2);
};