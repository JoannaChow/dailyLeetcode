function countVowelPermutation(n: number): number {
    const mod = Math.pow(10, 9) + 7;
    // const rules: Record<string, string[]> = {
    //     a: ["e", "i", "u"],
    //     e: ["a", "i"],
    //     i: ["e", "o"],
    //     o: ["i"],
    //     u: ["i", "o"],
    // };
    let answer: number = 0;

    let dp = [1, 1, 1, 1, 1];
    for (let i = 1; i < n; i++) {
        const newDP: number[] = [];
        newDP.push((dp[1] + dp[2] + dp[4]) % mod);
        newDP.push((dp[0] + dp[2]) % mod);
        newDP.push((dp[1] + dp[3]) % mod);
        newDP.push(dp[2] % mod);
        newDP.push((dp[2] + dp[3]) % mod);
        dp = newDP;
    }
    dp.forEach((num) => (answer += num));
    return answer % mod;
}
