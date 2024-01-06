function climbStairs(n: number): number {
    const steps: number[] = new Array(n).fill(0);
    steps[n - 1] = 1;
    if (n - 2 >= 0) steps[n - 2] = 2;
    for (let i = n - 3; i >= 0; i--) {
        steps[i] = steps[i + 1] + steps[i + 2];
    }
    return steps[0];
};