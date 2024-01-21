function fib(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;

    const dp = Array(n).fill(-1);
    dp[0] = 0;
    dp[1] = 1;
    function f(num) {
        if (dp[num] !== -1) return dp[num];
        dp[num] = f(num - 1) + f(num - 2);
        return dp[num];
    }
    return f(n);
};