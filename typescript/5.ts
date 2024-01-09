function longestPalindrome(s: string): string {
    let res = s[0];
    for (let i = 1; i < s.length; i++) {
        let left = i, right = i;
        while (left - 1 >= 0 && s[left - 1] === s[i]) left--;
        while (right + 1 < s.length && s[right + 1] === s[i]) right++;
        while (left - 1 >= 0 && right + 1 < s.length) {
            if (s[left - 1] === s[right + 1]) {
                left--;
                right++;
                continue;
            }
            break;
        }
        if (right - left + 1 > res.length) {
            res = s.substring(left, right + 1);
        }
    }
    return res;
};