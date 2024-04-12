function maxLength(arr: string[]): number {
    let curStr = "",
        maxLength = 0;
    function backtrack(i: number) {
        if (i === arr.length) {
            return;
        }

        const temp = curStr;
        curStr += arr[i];
        const reducedStr = curStr
            .split("")
            .reduce((a, b) => (a.indexOf(b) !== -1 ? a : a + b));
        if (reducedStr === curStr) {
            maxLength = Math.max(maxLength, curStr.length);
            backtrack(i + 1);
        }
        curStr = temp;
        backtrack(i + 1);
    }
    backtrack(0);
    return maxLength;
}
