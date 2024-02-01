// O(n^2)
function longestPalindromeSubseq(s: string): number {
    const dp: number[][] = [];
    for (let i = 0; i < s.length + 1; i++) {
        dp.push(Array(s.length + 1).fill(0));
    }
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = 0; j < s.length; j++) {
            if (s[i] === s[j]) {
                dp[i][s.length - j - 1] = 1 + dp[i + 1][s.length - j];
            } else {
                dp[i][s.length - j - 1] = Math.max(
                    dp[i + 1][s.length - j - 1],
                    dp[i][s.length - j]
                );
            }
        }
    }
    return dp[0][0];
}
/** O(2^n)
function longestPalindromeSubseq(s: string): number {
    const dp = new Map();

    function dfs(index: number, substr: string): number {
        const key = `${index},${substr}`;
        if (index === s.length) {
            let isPalindro = true;
            for (let left = 0, right = substr.length - 1; left <= right; left++, right--) {
                if (substr[left] !== substr[right]) {
                    isPalindro = false;
                    break;
                }
            }
            return isPalindro ? substr.length : 0;
        }

        if (dp.has(key)) {
            return dp.get(key);
        }

        dp.set(key, Math.max(
            dfs(index + 1, substr),
            dfs(index + 1, `${substr}${s[index]}`)
        ))
        return dp.get(key);
    }

    return dfs(0, "");
};*/
