function partition(s: string): string[][] {
    const res: string[][] = [];
    const part: string[] = [];
    function backtrack(index: number) {
        if (index >= s.length) {
            res.push(part.slice());
            return;
        }
        for (let i = index; i < s.length; i++) {
            if (isPallindrone(s.substring(index, i + 1))) {
                part.push(s.substring(index, i + 1));
                backtrack(i + 1);
                part.pop();
            }
        }
    }
    function isPallindrone(str: string) {
        let right = 0, left = str.length - 1;
        while (left >= right) {
            if (str[right] !== str[left]) {
                return false;
            }
            right++;
            left--;
        }
        return true;
    }
    backtrack(0);
    return res;
};