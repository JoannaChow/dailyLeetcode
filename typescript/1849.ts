function splitString(s: string): boolean {
    const parts: string[] = [];
    function backtrack(i: number) {
        if (i === s.length) {
            return parts.length > 1;
        }
        for (let j = i + 1; j <= s.length; j++) {
            const curStr = s.slice(i, j);
            if (parts.length === 0) {
                parts.push(curStr);
                if (backtrack(j)) return true;
                parts.pop();
            } else {
                const lastStr = parts[parts.length - 1];
                if (parseInt(lastStr, 10) === parseInt(curStr, 10) + 1) {
                    parts.push(curStr);
                    if (backtrack(j)) return true;
                    parts.pop();
                }
                if (parseInt(lastStr, 10) < parseInt(curStr, 10)) break;
            }
        }
        return false;
    }
    return backtrack(0);
}
