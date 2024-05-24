function addOperators(num: string, target: number): string[] {
    const result: string[] = [];

    function backtracking(
        exp: string,
        sum: number,
        prev: number,
        start: number
    ) {
        if (start === num.length) {
            if (sum === target) result.push(exp);
            return;
        }

        let curStr = "";
        for (let i = start; i < num.length; i++) {
            curStr += num[i];
            const cur = parseInt(curStr);

            if (start === 0) {
                backtracking(curStr, cur, cur, i + 1);
                if (cur === 0) return;
                continue;
            }

            backtracking(
                exp + "*" + curStr,
                sum - prev + cur * prev,
                prev * cur,
                i + 1
            );
            backtracking(exp + "+" + curStr, sum + cur, cur, i + 1);
            backtracking(exp + "-" + curStr, sum - cur, -cur, i + 1);
            if (cur === 0) return;
        }
    }

    backtracking("", 0, 0, 0);
    return result;
}
