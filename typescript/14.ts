function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    let curPrefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].indexOf(curPrefix) === 0) continue;

        let left = 0, right = curPrefix.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (strs[i].indexOf(curPrefix.substring(0, mid + 1)) === 0) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        curPrefix = curPrefix.substring(0, left);
        if (left === 0) {
            break;
        }
    }
    return curPrefix;
};