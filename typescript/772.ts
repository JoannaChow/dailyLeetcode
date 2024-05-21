function calculate(s: string): number {
    s = "(" + s + ")";
    return calcCurLevel(0);
    function calcCurLevel(index: number): number {
        // return till hit ")" or hit the end
        let num = 0;
        let sign = 1;
        let op = "+";
        const stack: number[] = [];
        const operations = ["+", "-", "*", "/", ")"];
        for (; index < s.length; index++) {
            const c = s[index];
            if (c === "(") {
                let openParenthese = 1;
                num = calcCurLevel(index + 1);
                while (s[index] !== ")" || openParenthese !== 0) {
                    index++;
                    if (s[index] === ")") openParenthese--;
                    if (s[index] === "(") openParenthese++;
                }
                continue;
            }
            if (!isNaN(parseInt(c))) {
                num = 10 * num + parseInt(c);
            }
            if (
                (isNaN(parseInt(c)) && operations.includes(c)) ||
                index === s.length - 1
            ) {
                if (op === "*") {
                    const lastNum = stack.pop() as number;
                    const val = lastNum * num * sign;
                    stack.push(val);
                } else if (op === "/") {
                    const lastNum = stack.pop() as number;
                    sign *= lastNum < 0 ? -1 : 1;
                    sign *= num < 0 ? -1 : 1;
                    const val = sign * Math.floor(Math.abs(lastNum) / Math.abs(num));
                    stack.push(val);
                } else {
                    stack.push(sign * num);
                }
                op = c;
                sign = c === "-" ? -1 : 1;
                num = 0;
            }
            if (c === ")") break;
        }
        stack.push(sign * num);
        return stack.reduce((a, b) => a + b);
    }
}
