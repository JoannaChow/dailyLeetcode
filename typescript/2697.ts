function makeSmallestPalindrome(s: string): string {
    const splitChar = s.split("");
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            if (s.charCodeAt(i) < s.charCodeAt(j)) {
                splitChar[j] = s[i];
            } else {
                splitChar[i] = s[j];
            }
        }
    }
    return splitChar.join("");
};