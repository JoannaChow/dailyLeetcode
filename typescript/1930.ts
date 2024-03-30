function countPalindromicSubsequence(s: string): number {
    let count = 0;
    const checkedFirstChar: Set<string> = new Set();
    for (let i = 0; i < s.length; i++) {
        if (checkedFirstChar.has(s[i])) continue;

        checkedFirstChar.add(s[i]);
        let j = s.lastIndexOf(s[i]);
        if (j <= i) continue;
        const letters = "abcdefghijklmnopqrstuvwxyz";
        for (let k = 0; k < letters.length; k++) {
            const mid = s.indexOf(letters[k], i + 1);
            if (mid !== -1 && mid < j) {
                count++;
            }
        }
    }
    return count;
}
