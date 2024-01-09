function countSubstrings(s: string): number {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        res++;
        let left = i, right = i;
        while (right + 1 < s.length && s[right + 1] === s[i]) {
            res++;
            right++;
        }
        while (left - 1 >= 0 && right + 1 < s.length) {
            if (s[left - 1] === s[right + 1]) {
                res++;
                left--;
                right++;
                continue;
            }
            break;
        }
    }
    return res;
};