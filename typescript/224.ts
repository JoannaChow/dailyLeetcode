function calculate(s: string): number {
    const stack: number[] = [];
    let num = 0;
    let sign = 1;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (!isNaN(parseInt(c))) {
            num = num * 10 + parseInt(c);
        } else if (c === "+" || c === "-") {
            result += sign * num;
            sign = c === "+" ? 1 : -1;
            num = 0;
        } else if (c === "(") {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (c === ")") {
            result += sign * num;
            if (stack.length) {
                result *= stack.pop() as number;
                result += stack.pop() as number;
            }
            num = 0;
        }
    }
    return result + sign * num;
}
