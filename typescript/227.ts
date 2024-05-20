function calculate(s: string): number {
    const stack: number[] = [];
    let num = 0;
    let sign = 1;
    let op = "+";
    const operations = ["+", "-", "*", "/"];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (!isNaN(parseInt(c))) {
            num = num * 10 + parseInt(c);
        }
        if (
            (isNaN(parseInt(c)) && operations.includes(c)) ||
            i === s.length - 1
        ) {
            if (op === "*") {
                const lastNum = stack.pop() as number;
                const val = lastNum * sign * num;
                stack.push(val);
            } else if (op === "/") {
                const lastNum = stack.pop() as number;
                sign = lastNum < 0 ? -1 : 1;
                const val = sign * Math.floor(Math.abs(lastNum) / num);
                stack.push(val);
            } else {
                stack.push(sign * num);
            }
            op = c;
            sign = c === "-" ? -1 : 1;
            num = 0;
        }
    }
    return stack.reduce((a, b) => a + b);
}
